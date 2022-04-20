<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "LayoutFruchterman",
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container
    const graph = new G6.Graph({
      container,
      width: scrollWidth,
      height: scrollHeight,
      fitView: true,
      layout: {
        // fruchterman - 力导向的一种布局
        type: 'fruchterman',
        // gravity: 20, // 可选 - 重力的大小，影响布局的紧凑程度
        // speed: 2, // 可选 - 每次迭代节点移动的速度。速度太快可能会导致强烈震荡
        // clustering: true, // 可选 - 是否按照聚类布局
        // clusterGravity: 30, // 可选 - 聚类内部的重力大小，影响聚类的紧凑程度
        // maxIteration: 2000, // 可选，迭代次数
      }
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>