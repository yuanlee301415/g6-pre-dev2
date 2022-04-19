<!--
边总览
-->
<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "DefaultEdge",
  mounted() {
    const graph = new G6.Graph({
      container: 'mountNode', // 指定挂载容器
      width: 800, // 图的宽度
      height: 500, // 图的高度
      fitView: true,
      layout: {
        type: 'random'
      },
      defaultEdge: {
        type: 'line',
        style: {
          endArrow: {
            path: G6.Arrow.vee(5, 8, 10), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
            d: 15
          },
        }
      }
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>