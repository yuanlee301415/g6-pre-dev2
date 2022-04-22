<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

let graph

export default {
  name: "Node",
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
      /**
       * 设置各个节点样式及其他配置，以及在各个状态下节点的 KeyShape 的样式。
       * 提示: 该方法必须在 render 之前调用，否则不起作用。
       */
      graph.node(_ => {
        // console.log(_)
        return {
          ..._,
          label: _.label.toUpperCase(),
          style: {
            fill: 'blue',
          },
          labelCfg: {
            style: {
              fill: 'white'
            }
          }
        }
      })
      graph.data(data)
      graph.render()
    }
  }
}
</script>

<style scoped>

</style>