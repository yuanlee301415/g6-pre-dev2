<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleEmit">Emit</button>
    <button @click="handleOffNodeClick">OffNodeClick</button>
    <button @click="handleOffNodeHover">OffNodeHover</button>
    <button @click="handleOffEdgeHover">OffEdgeHover</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

let graph

export default {
  name: "Event",
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const container = document.getElementById('container');
      const { scrollWidth, scrollHeight } = container

      graph = new G6.Graph({
        container,
        width: scrollWidth,
        height: scrollHeight,
        fitView: true,
        layout: {
          type: 'random'
        },
        defaultEdge: {
          type: 'line',
          style: {
            endArrow: {
              path: G6.Arrow.vee(5, 6, 3),
              d: 3
            }
          }
        },
        nodeStateStyles: {
          hover: {
            stroke: 'cyan',
            'text-shape': {
                fill: 'fuchsia'
            }
          }
        },        edgeStateStyles: {
          hover: {
            stroke: 'red',
            'text-shape': {
                fill: 'green'
            }
          }
        },
        modes: {
          default: ['click-select']
        }
      });
      graph.data(data)
      graph.render()

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

      // 鼠标进入边
      graph.on('edge:mouseenter', e => {
        graph.setItemState(e.item, 'hover', true)
      })

      // 鼠标离开边
      graph.on('edge:mouseleave', e => {
        graph.setItemState(e.item, 'hover', false)
      })

      // 鼠标点击边
      graph.on('edge:click', e => {
        // 先将所有当前是 click 状态的边置为非 click 状态
        graph.findAllByState('edge', 'click').forEach(_ => {
          graph.setItemState(_, 'click', false)
        })
        graph.setItemState(e.item, 'click', true)
      })
    },

    handleEmit() {
      const node1 = graph.findById('2')
      graph.emit('node:click', {
        item: node1
      })

      const node2 = graph.findById('3')
      graph.emit('node:mouseenter', {
        item: node2
      })

      const edge3 = graph.find('edge', _ => _.getModel().label === 'e0-3')
      graph.emit('edge:mouseenter', {
        item: edge3
      })
    },

    handleOffNodeClick() {
      graph.off('node:click')
    },

    handleOffNodeHover() {
      graph.off('node:mouseenter')
      graph.off('node:mouseleave')
    },

    handleOffEdgeHover() {
      graph.off('edge:mouseenter')
      graph.off('edge:mouseleave')
    }

  }
}
</script>

<style scoped>

</style>