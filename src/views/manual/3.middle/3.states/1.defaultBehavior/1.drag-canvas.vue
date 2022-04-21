<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

export default {
  name: "DragCanvas",
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container
    const graph = new G6.Graph({
      container,
      width: scrollWidth,
      height: scrollHeight,
      fitView: true,
      defaultEdge: {
        type: 'line',
        style: {
          endArrow: {
            path: G6.Arrow.vee(5, 6, 3), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
            d: 3
          },
        }
      },
      layout: {
        type: 'gForce'
      },
      // 交互模式 Mode
      modes: {
        /**
         * 拖拽画布
         */
        default: ['drag-canvas']
      }
    });
    graph.data(data)
    graph.render()

    // 监听事件
    graph.on('canvas:dragstart', e => {
      console.log('canvas:dragstart>e:', e)
    })
    graph.on('canvas:drag', e => {
      console.log('canvas:drag>e:', e)
    })
    graph.on('canvas:dragend', e => {
      console.log('canvas:dragend>e:', e)
    })
  }
}
</script>

<style scoped>

</style>