<template>
  <div>
    <div id="mountNode"></div>
    <button @click="handleClick">Update</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "UpdateElement",
  data() {
    return {
      graph: null
    }
  },

  methods: {
    init() {
      const graph = new G6.Graph({
        container: 'mountNode', // 指定挂载容器
        width: 800, // 图的宽度
        height: 500, // 图的高度
        fitView: true,
        layout: {
          type: 'random'
        },
        defaultEdge: {
          type: 'line'
        }
      });
      graph.data(data)
      graph.render()

      this.data = data
      this.graph = graph
    },

    handleClick() {
      console.log(this.graph)
      // [Vue warn]: Error in v-on handler: "TypeError: Cannot read properties of undefined (reading 'getModel')"
      // Todo: Error
      this.graph.updateItem(this.data[0], {
        style: {
          stroke: 'blue'
        }
      })
    }
  },

  mounted() {
    this.init()
  }
}
</script>

<style scoped>

</style>