<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleChangeData">ChangeData</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";

const data = {
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

const data2 = {
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

let graph
let id = data.nodes.length

export default {
  name: "Refresh",
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
        fitCenter: true,
        layout: {
          type: 'gForce'
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas']
        }
      });
      graph.data(data)
      graph.render()
    },
    handleChangeData() {
      const idStr = id.toString()
      data.nodes.push({
        id: idStr,
        label: idStr
      })
      data.edges.push({
        source: '0',
        target: idStr
      })
      // Todo: 更新后，图显示错误
      graph.changeData()
      graph.refresh()
      id++
    }
  }
}
</script>

<style scoped>

</style>