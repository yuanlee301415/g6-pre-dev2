<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleDownload">Download</button>
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
          default: ['zoom-canvas', 'click-select']
        }
      });
      graph.data(data)
      graph.render()
    },

    handleDownload() {
      graph.downloadFullImage()
    }
  }
}
</script>

<style scoped>

</style>