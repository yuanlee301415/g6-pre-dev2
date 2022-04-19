<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "Example",
  mounted() {
    const graph = new G6.Graph({
      container: 'mountNode', // 指定挂载容器
      width: 800, // 图的宽度
      height: 500, // 图的高度
      fitView: true,
      fitViewPadding: [20, 40, 50, 20],
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>