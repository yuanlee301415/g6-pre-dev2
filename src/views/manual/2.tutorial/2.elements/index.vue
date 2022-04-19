<!--
元素配置:
节点样式
边样式
-->
<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from '@antv/g6'
import data from './data.json'

export default {
  name: "Elements",
  data() {
    return {
      data: null
    }
  },
  created() {
    this.data = data
  },
  mounted() {
    const graph = new G6.Graph({
      container: 'mountNode',
      width: 800,
      height: 600,
      fitView: true,
      fitViewPadding: [20, 40, 50, 20],
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
    console.log('data:', this.data)

    graph.data(this.data);
    graph.render();
  }
}

</script>

<style scoped>

</style>
