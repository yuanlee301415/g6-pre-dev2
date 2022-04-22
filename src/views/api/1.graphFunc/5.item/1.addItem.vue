<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleFitView">FitView</button>
    <button @click="handleAddItem">AddItem</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data2.json'

let graph

export default {
  name: "AddItem",
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
        }
      });
      graph.data(data)
      graph.render()
    },

    handleFitView() {
      graph.fitView()
    },

    handleAddItem() {
      const nodes = graph.getNodes()
      const idStr = graph.getNodes().length.toString()
      const target = nodes[nodes.length * Math.random() | 0]

      const node = {
        id: idStr,
        label: `N-${idStr}`
      }

      graph.addItem('node', node)
      target && graph.addItem('edge', {
            source: node.id,
            target: target.getModel().id
          }
      )
      graph.layout()
    }
  }
}
</script>

<style scoped>

</style>