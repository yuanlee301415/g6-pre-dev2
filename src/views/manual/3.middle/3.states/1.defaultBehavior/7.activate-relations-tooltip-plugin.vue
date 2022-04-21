<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;position: relative;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

export default {
  name: "ActivateRelations",
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container
    const tooltip = new G6.Tooltip({
      offsetX: container.offsetLeft * -1 + 15,
      offsetY: container.offsetTop * -1 + 15,
      getContent(e) {
        const model = e.item.getModel()
        console.log(model)
        return `Label: ${model.label || model.id}`
      },
      itemTypes: ['node', 'edge']
    })
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
      },
      plugins: [tooltip]
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>