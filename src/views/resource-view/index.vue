<template>
  <div class="resourceView">
    <div class="left">
      <ModelTree
          :data="tree.data"
          :key="tree.key"
          :show-search="false"
          @item-click="onItemClick"
          @item-dblclick="onItemDblclick"
      />
    </div>

    <div class="right">
      <div ref="graphContainer" style="height: 600px;"/>
    </div>

  </div>
</template>

<script>
import G6 from "@antv/g6";
import { getCitTreeAPI, getTopologyAPI} from "@/api";
import ModelTree from '@/components/ModelTree'
import Topology, { NODE_TYPE} from './Topology'

let graph

export default {
  name: 'ResourceView',
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
    this.getTopology()
  },
  mounted() {
    const graphContainer = this.$refs['graphContainer']
    graph = new Topology(G6, {
      container: graphContainer,
      width: graphContainer.scrollWidth,
      height: graphContainer.scrollHeight
    })
    console.log({ graph })
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
      graph.initData(data)
    },

    onItemClick(node, item) {
      console.log('onItemClick>item:', item)
    },

    onItemDblclick(node, item) {
      console.log('onItemDblclick>item:', item)
      graph.addItem(NODE_TYPE, {
        id: item.id.toString(),
        label: item.displayName
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
