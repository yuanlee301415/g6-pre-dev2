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
      <el-select v-model="topology.id" @change="handleChangeGraph">
        <el-option value="default" label="默认拓扑图"></el-option>
        <el-option value="overlap" label="边重叠"></el-option>
        <el-option value="all" label="所有节点"></el-option>
      </el-select>
      <el-button @click="getTopology()">Reload</el-button>
      <div ref="graphContainer" style="height: 600px;border: 1px solid #999;position: relative;"/>
    </div>

  </div>
</template>

<script>
import { getCitTreeAPI, getTopologyAPI, getNeighborsAPI } from "@/api";
import ModelTree from '@/components/ModelTree'
import TopologyStore, { NODE_TYPE} from '@/G6/TopologyStore'

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
        // id: 'overlap',
        id: 'default',
      }
    }
  },
  created() {
    this.getCitTree()
  },
  mounted() {
    const container = this.$refs['graphContainer']
    topology = new TopologyStore({
      container: container,
      width: container.scrollWidth,
      height: container.scrollHeight,
      menus: [
        { key: 'show-neighbors', label: '显示邻居', exec: this.showNeighbors}
      ]
    })
    console.log(topology)
    this.getTopology()
  },
  methods: {
    showNeighbors(node) {
      getNeighborsAPI(node.getModel().id).then(res => {
        if (res.code !== 0) return
        topology.showNeighbors(res.data)
      })
    },

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
        this.changeData(data)
      })
    },

    changeData(data) {
      topology.changeData(data)
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
      if (topology.graph.find('node', _ => _.getModel().id === item.name)) {
        this.$alert('节点已存在！')
        return
      }
      const point = topology.graph.getPointByClient(e.x, e.y)
      console.log('onDragend>point:', point)

      topology.addItem(NODE_TYPE, {
        id: item.name,
        label: item.displayName,
        x: point.x,
        y: point.y
      })
    },

    handleChangeGraph() {
      this.getTopology()
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
