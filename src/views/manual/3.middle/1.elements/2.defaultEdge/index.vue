<!--
边总览
-->
<template>
  <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

export default {
  name: "DefaultEdge",
  mounted() {
    const container = document.getElementById('container');
    const { scrollWidth, scrollHeight } = container
    const graph = new G6.Graph({
      container,
      width: scrollWidth,
      height: scrollHeight,
      fitView: true,
      layout: {
        type: 'random'
      },
      defaultEdge: {
        type: 'line'
      }
    });

    /**
     * 使用 graph.edge() 方法配置
     */
    graph.edge(function () {
      // console.log(arguments)
      /**
       * 自动合并数据及配置
       */
      return {
        type: 'cubic',
        style: {
          stroke: 'skyblue',
        },
      };
    });
    graph.data(data)
    graph.render()
  }
}
</script>

<style scoped>

</style>