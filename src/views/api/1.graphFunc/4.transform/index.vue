<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>

    <button @click="handleGetZoom">GetZoom</button>
    <button @click="handleSetZoom">SetZoom</button>
    <button @click="handleFitView">FitView</button>
    <button @click="handleFitCenter">FitCenter</button>
    <button @click="handleZoomTo">ZoomTo</button>
    <button @click="handleFocusItem">FocusItem</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

let graph

export default {
  name: "Transform",
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
        fitCenter: true,
        layout: {
          type: 'random'
        },
        modes: {
          default: ['zoom-canvas']
        }
      });
      graph.data(data)
      graph.render()
      console.log('graph:', graph)
    },

    handleGetZoom() {
      const zoom = graph.getZoom()
      console.log('zoom:', zoom)
    },

    handleSetZoom() {
      const zoom = graph.getZoom()
      const width = graph.getWidth()
      const height = graph.getHeight()
      console.log({ zoom, width, height })

      const val = zoom * 1.1
      console.log('setZoom:', val)
      graph.zoom(val, { x: width / 2, y: height / 2})
    },

    handleZoomTo() {
      const zoom = graph.getZoom()
      const width = graph.getWidth()
      const height = graph.getHeight()
      console.log({ zoom, width, height })

      const val = zoom * 1.1
      console.log('zoomTo:', val)
      graph.zoomTo(val, { x: width / 2, y: height / 2})
    },

    handleFitView() {
      graph.fitView()
    },

    handleFitCenter() {
      graph.fitCenter()
    },

    handleFocusItem() {
      // 缩放随机比例
      const zoom = Math.random() * 6 + 2 | 0
      const nodes = graph.getNodes()

      // 随机选择节点
      const node = nodes[Math.random() * nodes.length | 0]
      if (!node) return

      console.log({ zoom, label: node.getModel().label })

      graph.zoomTo(zoom)
      graph.focusItem(node)
    }
  }
}
</script>

<style scoped>

</style>