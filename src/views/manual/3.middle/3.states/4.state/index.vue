<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "State",
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
            path: G6.Arrow.vee(5, 6, 3),
            d: 3
          },
        }
      },
      nodeStateStyles : {
        hover: {
          // keyShape 的状态样式
          fill: 'black',
          stroke: 'green',
          'text-shape': {
            fill: 'white'
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

    // 监听事件，改变状态
    graph.on('node:mouseenter', e => {
      console.log('node:mouseenter>e', e)
      graph.setItemState(e.item, 'hover', true)
    })

    graph.on('node:mouseleave', e => {
      console.log('node:mouseenter>e', e)
      graph.setItemState(e.item, 'hover', false)
    })
  }
}
</script>

<style scoped>

</style>