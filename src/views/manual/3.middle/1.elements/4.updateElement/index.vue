<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleClick">Update</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "UpdateElement",
  data() {
    return {
      graph: null
    }
  },

  methods: {
    init() {
      const container = document.getElementById('container');
      const { scrollWidth, scrollHeight } = container
      const graph = new G6.Graph({
        container,
        width: scrollWidth,
        height: scrollHeight,
        fitView: true,
        layout: {
          type: 'random'
        },
        defaultEdge: {
          type: 'line'
        }
      });
      graph.data(data)
      graph.render()

      this.data = data
      this.graph = graph
    },

    handleClick() {
      console.log(this.graph)

      const nodes = this.graph.getNodes()
      const firstNode = nodes[0]
      console.log(firstNode)

      firstNode && this.graph.updateItem(firstNode, {
        style: {
          fill: 'red',
          stroke: 'green',
          lineWidth: 3
        },
        label: 'N0',
        labelCfg: {
          style: {
            fill: '#fff'
          }
        }
      })
    }
  },

  mounted() {
    this.init()
  }
}
</script>

<style scoped>

</style>