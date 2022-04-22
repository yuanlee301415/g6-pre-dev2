<!--
# 通用方法
-->
<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>

    <button @click="handleGetBBox">GetBBox</button>
    <button @click="handleGetContainer">GetContainer</button>
    <button @click="handleGetKeyShape">GetKeyShape</button>
    <button @click="handleGetType">GetType</button>
    <button @click="handleEnableCapture">EnableCapture</button>
    <button @click="handleClearCache">ClearCache</button>

  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

let graph

export default {
  name: "ItemGeneral",
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
      graph.node(_ => {
        _._oriLabel = _.label
        return _
      })
      graph.data(data)
      graph.render()
      console.log({
        nodes: graph.getNodes()
      })
    },

    handleGetBBox() {
      const item = graph.findById('0')
      const bBox = item.getBBox()
      console.log({ bBox })
    },

    handleGetContainer() {
      const item = graph.findById('0')
      const container = item.getContainer()
      console.log({ container })
    },

    handleGetKeyShape() {
      const item = graph.findById('0')
      const keyShape = item.getKeyShape()
      console.log({ keyShape })
    },

    handleGetType() {
      const item = graph.findById('0')
      const type = item.getType()
      console.log({ type })
    },

    handleEnableCapture() {
      const item = graph.findById('0')
      /**
       * 禁用该元素的交互事件
       */
      item.enableCapture(false)
    },

    handleClearCache() {
      const item = graph.findById('0')
      /**
       * 更新或刷新等操作后，清除缓存
       */
      item.clearCache()
    },


  }
}
</script>

<style scoped>

</style>