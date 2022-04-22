<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleHideItem">HideItem</button>
    <button @click="handleShowItem">ShowItem</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data2.json'

let graph
let selected

export default {
  name: "ShowHideItem",
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
        modes: {
          default: ['click-select']
        }
      });
      graph.data(data)
      graph.render()
      console.log(graph)
    },

    handleFitView() {
      graph.fitView()
    },

    handleHideItem() {
      const nodes = graph.findAllByState('node', 'selected')
      console.log({ nodes })
      if (!nodes.length) {
        console.warn('请选择元素')
        return
      }
      selected = nodes[0]
      graph.hideItem(selected)
    },

    handleShowItem() {
      if (!selected) return

      graph.showItem(selected)
    }
  }
}
</script>

<style scoped>

</style>