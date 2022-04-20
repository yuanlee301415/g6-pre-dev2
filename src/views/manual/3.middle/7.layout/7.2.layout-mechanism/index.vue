<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>

    <pre v-text="msg"></pre>
  </div>
</template>

<script>
import G6 from "@antv/g6";

const data = {
  nodes: [
    { id: '0', label: '0' },
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
  ],
  edges: [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
    { source: '0', target: '3' },
    { source: '0', target: '4' },
    { source: '1', target: '2' },
    { source: '1', target: '3' },
  ],
};

const data2 = {
  nodes: [
    { id: '0', label: '0' },
    { id: '1', label: '1' },
    { id: '2', label: '2' },
  ],
  edges: [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
  ],
};

export default {
  name: "LayoutMechanism",

  data() {
    return {
      msg: '初始：随机布局'
    }
  },

  mounted() {
    G6.Util.processParallelEdges(data.edges);

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

    setTimeout(() => {
      graph.updateLayout('force')
      this.msg = '切换布局：force'
    }, 1000 * 3)

    setTimeout(() => {
      graph.updateLayout({
        type: 'gForce',
        preventOverlap: true, // 布局参数，是否允许重叠
        nodeSize: 40, // 布局参数，节点大小，用于判断节点是否重叠
        linkDistance: 100, // 布局参数，边长
      })
      this.msg = '切换布局：gForce'
    }, 1000 * 5)

    setTimeout(() => {
      graph.changeData(data2)
      this.msg = '切换数据：data2'
    }, 1000 * 8)
  }
}
</script>

<style scoped>

</style>