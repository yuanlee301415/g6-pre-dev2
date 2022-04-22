<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleDestroy">Destroy</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

let graph

export default {
  name: "ItemDestroy",
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
        }
      });
      graph.node(_ => {
        _._oriLabel = _.label
        return _
      })
      graph.data(data)
      graph.render()
      console.log({
        nodes: graph.getNodes()
      })
    },

    handleDestroy() {
      const item = graph.findById('0')
      item.destroy()
    }
  }
}
</script>

<style scoped>

</style>