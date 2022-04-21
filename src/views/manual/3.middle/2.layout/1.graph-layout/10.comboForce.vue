<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

export default {
  name: "LayoutComboForce",
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container
    const graph = new G6.Graph({
      container,
      width: scrollWidth,
      height: scrollHeight,
      fitView: true,
      layout: {
        // comboForce - 基于力导向的专用于带有 combo 的图的布局算法
        type: 'comboForce'
      }
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>