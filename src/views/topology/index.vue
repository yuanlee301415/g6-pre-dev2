<template>
  <div class="resourceView">
    <div class="left">
      <ModelTree
          :data="tree.data"
          :key="tree.key"
          :show-search="false"
          @item-click="onItemClick"
          @item-dblclick="onItemDblclick"
          @dragend="onDragend"
      />
    </div>

    <div class="right">
      <el-select v-model="topology.id">
        <el-option value="default" label="默认拓扑图"></el-option>
      </el-select>
      <div ref="graphContainer" style="height: 600px;border: 1px solid #999;position: relative;"/>
    </div>

  </div>
</template>

<script>
import G6 from "@antv/g6";
import { getCitTreeAPI, getTopologyAPI} from "@/api";
import ModelTree from '@/components/ModelTree'
import Topology, { NODE_TYPE} from './Topology'

let topology

export default {
  name: 'Topology',
  components: {
    ModelTree,
  },
  data() {
    return {
      tree: {
        data: null
      },
      topology: {
        id: 'default',
      }
    }
  },
  created() {
    this.getCitTree()
  },
  mounted() {
    const container = this.$refs['graphContainer']
    topology = new Topology(G6, {
      container: container,
      width: container.scrollWidth,
      height: container.scrollHeight
    })
    console.log(topology)
    this.getTopology()
  },
  methods: {
    getCitTree() {
      getCitTreeAPI().then(res => {
        if (res.code !== 0) return
        this.tree.data = res.data
        this.tree.key = Math.random()
      })
    },

    getTopology() {
      getTopologyAPI(this.topology.id).then(res => {
        if (res.code !== 0) return
        return res.data
      }).then(data => {
        this.initGraphData(data)
      })
    },

    initGraphData(data) {
      topology.initData(data)
    },

    onItemClick(node, item) {
      console.log('onItemClick>item:', item)
    },

    onItemDblclick(node, item) {
      console.log('onItemDblclick>item:', item)
      topology.addItem(NODE_TYPE, {
        id: item.id.toString(),
        label: item.displayName
      })
    },

    onDragend(node, item, e) {
      console.log('onDragend>args:', arguments)
      const point = topology.graph.getPointByClient(e.x, e.y)
      console.log('onDragend>point:', point)

      topology.addItem(NODE_TYPE, {
        id: item.name,
        label: item.displayName,
        x: point.x,
        y: point.y
      })
    }
  }
}
</script>

<style scoped>
.resourceView {
  position: relative;
}
.left {
  width: 280px;
  position: fixed;
  top: 0;
  bottom: 0;
}
.right {
  width: calc(100% - 600px);
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  border-left: 1px solid #ccc;
}
</style>
