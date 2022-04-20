<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "LayoutGForce",
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container
    const graph = new G6.Graph({
      container,
      width: scrollWidth,
      height: scrollHeight,
      fitView: true,
      layout: {
        // GForce - G6 4.0 支持的经典力导向布局
        type: 'gForce'
      }
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>