<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleFitView">FitView</button>
    <button @click="handleUpdateItem">UpdateItem</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data2.json'

let graph

export default {
  name: "UpdateItem",
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

    handleUpdateItem() {
      const nodes = graph.getNodes()
      const item = nodes[nodes.length * Math.random() | 0]
      console.log(item)

      if (!item) return

      console.log({
        label: item.getModel().label
      })

      graph.updateItem(item, {
        style: {
          fill: 'red',
        }
      })
    }
  }
}
</script>

<style scoped>

</style>