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
      <div ref="graphContainer" style="height: 600px;">

      </div>
    </div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import { getCitTreeAPI} from "@/api/tree";
import ModelTree from '@/components/ModelTree'
import data from './data.json'
import Topology, { NODE_TYPE, EDGE_TYPE} from './Topology'

let topology

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
      graph: {
        data: null
      }
    }
  },
  created() {
    this.data = data
    this.getCitTree()
  },
  mounted() {
    const graphContainer = this.$refs['graphContainer']
    topology = new Topology(G6, {
      container: graphContainer,
      width: graphContainer.scrollWidth,
      height: graphContainer.scrollHeight
    })
    console.log({ topology })
    this.getData()
  },
  methods: {
    getCitTree() {
      getCitTreeAPI().then(res => {
        if (res.code !== 0) return

        this.tree.data = res.data
        this.tree.key = Math.random()
      })
    },

    getData() {
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
