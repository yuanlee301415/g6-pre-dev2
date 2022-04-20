<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "ZoomCanvas",
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container
    const graph = new G6.Graph({
      container,
      width: scrollWidth,
      height: scrollHeight,
      fitView: true,
      layout: {
        // 随机布局
        type: 'random'
      },
      // 交互模式 Mode
      modes: {
        /**
         * 缩放画布
         */
        default: ['zoom-canvas']
      }
    });
    graph.data(data)
    graph.render()

    // 监听事件
    graph.on('wheelzoom', e => {
      console.log('wheelzoom>e:', e)
    })
  }
}
</script>

<style scoped>

</style>