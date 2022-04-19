<!--
边总览
-->
<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

export default {
  name: "DefaultEdge",
  mounted() {
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