<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>

    <button @click="handleGetContainer">GetContainer</button>
    <button @click="handleGetGroup">GetGroup</button>
    <button @click="handleGetMaxZoom">GetMaxZoom</button>
    <button @click="handleGetMinZoom">GetMinZoom</button>
    <button @click="handleGetWidth">GetWidth</button>
    <button @click="handleGetHeight">GetHeight</button>

  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

let graph

export default {
  name: "GetSet",
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
      console.log('graph:', graph)
    },
    handleGetContainer() {
      const container = graph.getContainer()
      console.log('container:', container)
    },
    handleGetGroup() {
      const group = graph.getGroup()
      console.log('group:', group)
    },
    handleGetMaxZoom() {
      const maxZoom = graph.getMaxZoom()
      console.log('maxZoom:', maxZoom)
    },
    handleGetMinZoom() {
      const minZoom = graph.getMinZoom()
      console.log('minZoom:', minZoom)
    },
    handleGetWidth() {
      const width = graph.getWidth()
      console.log('width:', width)
    },
    handleGetHeight() {
      const height = graph.getHeight()
      console.log('height:', height)
    }
  }
}
</script>

<style scoped>

</style>