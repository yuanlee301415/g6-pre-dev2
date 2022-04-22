<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleRead">Read</button>
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

export default {
  name: "Read",
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
          type: 'gForce'
        }
      });
      graph.data(data)
      graph.render()
    },
    handleRead() {
      graph.read(data2)
    }
  }
}
</script>

<style scoped>

</style>