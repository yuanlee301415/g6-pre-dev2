<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleGetNodeDegree">GetNodeDegree</button>
    <button @click="handleGetShortestPathMatrix">GetShortestPathMatrix</button>
    <button @click="handleGetAdjMatrix">GetAdjMatrix</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

let graph

export default {
  name: "Calculation",
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const container = document.getElementById('container');
      const { scrollWidth, scrollHeight } = container

      graph = new G6.Graph({
        container,
        width: scrollWidth,
        height: scrollHeight,
        fitView: true,
        layout: {
          type: 'random'
        },
        defaultEdge: {
          type: 'line',
          style: {
            endArrow: {
              path: G6.Arrow.vee(5, 6, 3),
              d: 3
            }
          }
        },
        nodeStateStyles: {
          hover: {
            stroke: 'cyan',
            'text-shape': {
                fill: 'fuchsia'
            }
          }
        },        edgeStateStyles: {
          hover: {
            stroke: 'red',
            'text-shape': {
                fill: 'green'
            }
          }
        },
        modes: {
          default: ['click-select']
        }
      });
      graph.data(data)
      graph.render()
    },

    handleGetNodeDegree() {
      const node = graph.findById('0')
      /**
       * 获取节点的出度、入度、总度数
       */
      const nodeDegree = graph.getNodeDegree(node)
      console.log(nodeDegree)
    },

    handleGetShortestPathMatrix() {
      /**
       * 获取图中两两节点之间的最短路径矩阵
       */
      const getShortestPathMatrix = graph.getShortestPathMatrix()
      console.log(getShortestPathMatrix)
    },

    handleGetAdjMatrix() {
      /**
       * 获取图的邻接矩阵
       */
      const getAdjMatrix = graph.getAdjMatrix()
      console.log(getAdjMatrix)
    }

  }
}
</script>

<style scoped>

</style>