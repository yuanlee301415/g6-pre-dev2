<!--
快速上手
-->

<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from '@antv/g6'

export default {
  name: "started",
  data() {
    return {
      data: null
    }
  },
  created() {
    this.data = {
      // 点集
      nodes: [
        {
          id: 'node1', // String，该节点存在则必须，节点的唯一标识
          x: 100, // Number，可选，节点位置的 x 值
          y: 200, // Number，可选，节点位置的 y 值
        },
        {
          id: 'node2', // String，该节点存在则必须，节点的唯一标识
          x: 300, // Number，可选，节点位置的 x 值
          y: 200, // Number，可选，节点位置的 y 值
        },
      ],
      // 边集
      edges: [
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node2', // String，必须，目标点 id
        },
      ],
    }
  },
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container
    const graph = new G6.Graph({
      container, // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
      width: scrollWidth, // Number，必须，图的宽度
      height: scrollHeight, // Number，必须，图的高度
    });

    console.log('graph:', graph)
    graph.data(this.data); // 读取 Step 2 中的数据源到图上
    graph.render(); // 渲染图
  }
}

</script>

<style scoped>

</style>
