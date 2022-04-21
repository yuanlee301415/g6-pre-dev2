<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;position: relative;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

export default {
  name: "Tooltip",
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
          }
        }
      },
      layout: {
        type: 'gForce'
      },
      // 交互模式 Mode
      modes: {
        default: [
          {
            type: 'tooltip',
            offset: 20,
            formatText(model) {
              return `Label: ${model.label}`
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