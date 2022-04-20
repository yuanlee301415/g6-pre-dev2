<!--
最基础的节点数据（`id`,`label`）
使用随机(`random`)布局
-->
<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "DefaultNode",
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container
    const graph = new G6.Graph({
      container,
      width: scrollWidth,
      height: scrollHeight,
      fitView: true,
      layout: {
        type: 'random'
      }
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>