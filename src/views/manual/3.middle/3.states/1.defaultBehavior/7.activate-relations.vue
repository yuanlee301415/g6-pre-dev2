<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;position: relative;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "ActivateRelations",
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
          },
          {
            type: 'edge-tooltip',
            offset: 20,
            formatText(model) {
              console.log(model)
              // Todo: 选中节点后，所有边的 tooltip 的 sourceNode / targetNode 不存在
              const { sourceNode, targetNode } = model
              if (!sourceNode || !targetNode) return `Label: ${model.label}`

              const sourceModel = sourceNode.getModel()
              const targetModel = targetNode.getModel()
              return `Label: ${model.label}<br/>Source: ${sourceModel.label}<br/>Targe: ${targetModel.label}`
            }
          },
          {
            type: 'click-select'
          },
          {
            /**
             * 当鼠标移到某节点时，突出显示该节点以及与其直接关联的节点和连线；
             */
            type: 'activate-relations',
            trigger: 'click'
          }
        ]
      }
    });
    graph.data(data)
    graph.render()
  }
}
</script>