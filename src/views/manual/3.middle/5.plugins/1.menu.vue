<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../data.json'

export default {
  name: "Menu",
  mounted() {
    const container = document.getElementById('container');
    const {scrollWidth, scrollHeight} = container

    const tooltip = new G6.Tooltip({
      // offsetX: container.offsetLeft * -1 + 15,
      // offsetY: container.offsetTop * -1 + 15,
      getContent(e) {
        const model = e.item.getModel()
        console.log(model)
        return `Label: ${model.label || model.id}`
      },
      itemTypes: ['node', 'edge']
    })

    const menu = new G6.Menu({
      // offsetX: container.offsetLeft * -1 + 15,
      // offsetY: container.offsetTop * -1 + 15,
      getContent() {
        return `<ul>
      <li id='show-node'>显示节点</li>
      <li id='hide-node'>隐藏节点</li>
    </ul>`;
      },
      handleMenuClick(target, item) {
        console.log({
          id: target.id,
          target,
          item
        })
      },
    });

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
          'drag-canvas',
          'zoom-canvas',
          'click-select'
        ]
      },
      // 配置插件
      plugins: [tooltip, menu],
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>