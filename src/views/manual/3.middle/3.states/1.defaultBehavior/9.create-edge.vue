<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "CreateEdge",
  mounted() {
    const container = document.getElementById('container');
    const {scrollWidth, scrollHeight} = container
    const graph = new G6.Graph({
      container,
      width: scrollWidth,
      height: scrollHeight,
      fitView: true,
      defaultEdge: {
        type: 'line',
        style: {
          endArrow: {
            path: G6.Arrow.vee(5, 8, 10), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
            d: 15
          },
        }
      },
      layout: {
        // 随机布局
        type: 'random'
      },
      // 交互模式 Mode
      modes: {
        default: [
          {
            /**
             * 框选节点
             */
            type: 'create-edge',
            trigger: 'click',
            key: 'shift'
          }
        ]
      }
    });
    graph.data(data)
    graph.render()

    // 监听事件
    graph.on('aftercreateedge', e => {
      console.log('aftercreateedge>e:', e)
      console.log('aftercreateedge>edge:', e.edge)

      const model = e.edge.getModel()
      console.log({source: model.source, target: model.target})
    })
  }
}
</script>

<style scoped>

</style>