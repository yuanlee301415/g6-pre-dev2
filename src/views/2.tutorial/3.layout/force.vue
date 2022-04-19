<!--
图布局:
力导向（渐变动画，动画结束后，各节点位置和默认布局结果相同）
-->
<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from '@antv/g6'
import data from './data-force.json'
console.log('data:', data)

export default {
  name: "Layout",
  data() {
    return {
      data: null
    }
  },
  created() {
    this.data = data
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const container = document.getElementById('container');
      const { scrollWidth, scrollHeight } = container
      const graph = new G6.Graph({
        container,
        width: scrollWidth,
        height: scrollHeight,
        // fitView: true,
        // fitViewPadding: [20, 40, 50, 20],
        defaultNode: {
          size: 30,
          labelCfg: {
            style: {
              fill: '#fff',
            },
          },
        },
        defaultEdge: {
          labelCfg: {
            autoRotate: true,
          },
        },
        layout: {
          type: 'force', // 指定为力导向布局
          preventOverlap: true, // 防止节点重叠
          linkDistance: 100, // 指定边距离为100
        }
      });
      console.log('graph:', graph)

      this.data.nodes.forEach((node) => {
        node.style = {
          lineWidth: 1,
          stroke: '#333',
          fill: 'steelblue'
        };
        switch (node.class) {
          case 'c0': {
            node.type = 'circle';
            break;
          }
          case 'c1': {
            node.type = 'rect';
            node.size = [35, 20];
            break;
          }
          case 'c2': {
            node.type = 'ellipse';
            node.size = [35, 20];
            break;
          }
        }
      });
      this.data.edges.forEach((edge) => {
        edge.style = {
          lineWidth: edge.weight,
          opacity: 0.6,
          stroke: 'grey'
        };
      });
      console.log('this.data:', this.data)

      graph.data(this.data);
      graph.render();
    }
  }
}

</script>

<style scoped>

</style>
