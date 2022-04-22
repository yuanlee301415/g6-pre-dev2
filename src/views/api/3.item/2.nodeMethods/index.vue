<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleLock">Lock</button>
    <button @click="handleGetNeighbors">GetNeighbors</button>
    <button @click="handleGetEdges">GetEdges</button>
    <button @click="handleGetInEdges">GetInEdges</button>
    <button @click="handleGetOutEdges">GetOutEdges</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

let graph

export default {
  name: "NodeMethods",
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const container = document.getElementById('container');
      const {scrollWidth, scrollHeight} = container

      graph = new G6.Graph({
        container,
        width: scrollWidth,
        height: scrollHeight,
        fitView: true,
        layout: {
          type: 'random'
        },
        defaultEdge: {
          type: 'quadratic',
          style: {
            endArrow: {
              path: G6.Arrow.vee(5, 6, 3),
              d: 3
            },
            stroke: '#00c'
          }
        },
        modes: {
          default: ['click-select', 'drag-node']
        }
      });
      graph.node(_ => {
        _._oriLabel = _.label
        return _
      })
      graph.data(data)
      graph.render()
    },

    handleLock() {
      const item = graph.findById('0')
      item.lock()
    },

    handleGetNeighbors() {
      const item = graph.findById('10')
      console.log({ getNeighbors: item.getNeighbors()})
    },

    handleGetEdges() {
      const item = graph.findById('10')
      console.log({ getEdges: item.getEdges()})
    },

    handleGetInEdges() {
      const item = graph.findById('10')
      console.log({ getInEdges: item.getInEdges()})
    },

    handleGetOutEdges() {
      const item = graph.findById('10')
      console.log({ getOutEdges: item.getOutEdges()})
    }
  }
}
</script>

<style scoped>

</style>