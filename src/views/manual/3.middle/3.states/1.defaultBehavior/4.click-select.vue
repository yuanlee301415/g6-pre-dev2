<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "ClickSelect",
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
        default: [
          {
            /**
             * 选中节点
             */
            type: 'click-select'
          }
        ]
      }
    });
    graph.data(data)
    graph.render()

    // 监听事件
    graph.on('nodeselectchange', e => {
      console.log('nodeselectchange>e:', e)

      console.log('selected>item::', e.target)

      const model = e.target.getModel()
      console.log('selected>model:', model)

      console.log('selectedItems:', e.selectedItems)
      console.log('select:', e.select)
    })
  }
}
</script>

<style scoped>

</style>