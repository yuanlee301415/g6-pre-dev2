<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

export default {
  name: "Visible",
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

    // 鼠标点击节点，隐藏该节点
    graph.on('node:click', (ev) => {
      const node = ev.item;
      console.log('before hide(), the node visible = ', node.get('visible'));
      node.hide();
      graph.paint();
      console.log('after hide(), the node visible = ', node.get('visible'));
    });

    // 鼠标点击边，隐藏该节点
    graph.on('edge:click', (ev) => {
      const edge = ev.item;
      console.log('before hide(), the edge visible = ', edge.get('visible'));
      edge.hide();
      graph.paint();
      console.log('after hide(), the edge visible = ', edge.get('visible'));
    });

    // 鼠标点击画出，显示所有节点和边
    graph.on('canvas:click', () => {
      const nodes = graph.getNodes()
      const edges = graph.getEdges()
      nodes.forEach(_ => {
        _.show()
      })
      edges.forEach(_ => {
        _.show()
      })
      graph.paint()
    });
  }
}
</script>

<style scoped>

</style>