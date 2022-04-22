<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleInit1">Init</button>
    <button @click="handleDestroy">Destroy</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data3.json'

let graph

export default {
  name: "Destroy",
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.handleDestroy()
  },
  methods: {
    handleInit1() {
      graph.data(data)
      graph.render()
    },
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
          default: ['zoom-canvas', 'click-select']
        }
      })
    },

    handleDestroy() {
      graph.destroy()
    }
  }
}
</script>

<style scoped>

</style>