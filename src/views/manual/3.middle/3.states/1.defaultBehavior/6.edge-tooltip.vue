<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;position: relative;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "EdgeTooltip",
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
            type: 'edge-tooltip',
            offset: 20,
            formatText(model) {
              console.log(model)
              const { sourceNode, targetNode } = model
              const sourceModel = sourceNode.getModel()
              const targetModel = targetNode.getModel()
              return `Label: ${model.label}<br/>Source: ${sourceModel.label}<br/>Targe: ${targetModel.label}`
            }
          }
        ]
      }
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>