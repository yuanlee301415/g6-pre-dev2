<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "CustomBehavior",
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container

    G6.registerBehavior('active-node', {
      getDefaultCfg() {
        return {
          multiple: true
        }
      },
      getEvents() {
        return {
          'node:click': 'onNodeClick',
          'canvas:click': 'onCanvasClick'
        }
      },
      onNodeClick(e) {
        const graph = this.graph
        const item = e.item
        if (item.hasState('active')) {
          graph.setItemState(item, 'active', false)
          return false
        }

        if (!this.multiple) {
          this.removeNodesState()
        }
        graph.setItemState(item, 'active', true)
      },
      onCanvasClick(e) {
        // shouldUpdate 可以复写
        if (this.shouldUpdate) {
          this.removeNodesState()
        }
      },
      removeNodesState() {
        graph.findAllByState('node', 'active').forEach(node => {
          graph.setItemState(node, 'active', false)
        })
      }
    })

    const graph = new G6.Graph({
      container,
      width: scrollWidth,
      height: scrollHeight,
      fitView: true,
      defaultEdge: {
        type: 'line',
        style: {
          endArrow: {
            path: G6.Arrow.vee(5, 6, 3),
            d: 3
          }
        }
      },
      layout: {
        type: 'gForce'
      },
      // 交互模式 Mode
      modes: {
        /**
         * 自定义的 Behavior
         */
        default: ['active-node']
      }
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>