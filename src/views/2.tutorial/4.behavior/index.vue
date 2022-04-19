<!--
交互:
节点（hover \ click）
边（click）
-->
<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from '@antv/g6'
import data from './data.json'

export default {
  name: "Behavior",
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
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点
        },
        // 节点不同状态下的样式集合
        nodeStateStyles: {
          // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
          hover: {
            fill: 'black',
          },
          // 鼠标点击节点，即 click 状态为 true 时的样式
          click: {
            stroke: 'blue',
            lineWidth: 3,
          },
        },
        // 边不同状态下的样式集合
        edgeStateStyles: {
          // 鼠标点击边，即 click 状态为 true 时的样式
          click: {
            stroke: 'red',
          },
        },
      });

      // 鼠标进入节点
      graph.on('node:mouseenter', e => {
        graph.setItemState(e.item, 'hover', true)
      })

      // 鼠标离开节点
      graph.on('node:mouseleave', e => {
        graph.setItemState(e.item, 'hover', false)
      })

      // 鼠标点击节点
      graph.on('node:click', (e) => {
        // 先将所有当前有 click 状态的节点的 click 状态置为 false
        const clickNodes = graph.findAllByState('node', 'click');
        clickNodes.forEach((cn) => {
          graph.setItemState(cn, 'click', false);
        });
        const nodeItem = e.item;
        // 设置目标节点的 click 状态 为 true
        graph.setItemState(nodeItem, 'click', true);
      })

      // 点击边
      graph.on('edge:click', e => {
        // 先将所有当前是 click 状态的边置为非 click 状态
        graph.findAllByState('edge', 'click').forEach(_ => {
          graph.setItemState(_, 'click', false)
        })
        graph.setItemState(e.item, 'click', true)
      })
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
