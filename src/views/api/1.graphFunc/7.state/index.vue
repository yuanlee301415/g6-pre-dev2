<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleSetItemState">SetItemState</button>
    <button @click="handleClearItemState">ClearItemState</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data2.json'

let graph

export default {
  name: "State",
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
        modes: {
          default: ['click-select']
        }
      });
      graph.data(data)
      graph.render()
    },

    handleSetItemState() {
      const node = graph.findById('2')
      graph.setItemState(node, 'selected', true)
    },

    handleClearItemState() {
      const node = graph.findById('2')
      graph.clearItemStates(node, 'selected')
    }

  }
}
</script>

<style scoped>

</style>