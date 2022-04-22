<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleGetSource">GetSource</button>
    <button @click="handleGetTarget">GetTarget</button>
    <button @click="handleSetSource">SetSource</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data2.json'

let graph

export default {
  name: "EdgeMethods",
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const container = document.getElementById('container');
      const {scrollWidth, scrollHeight} = container

      graph = new G6.Graph({
        container,
        width: scrollWidth,
        height: scrollHeight,
        fitView: true,
        layout: {
          type: 'gForce'
        },
        defaultEdge: {
          type: 'quadratic',
          style: {
            endArrow: {
              path: G6.Arrow.vee(5, 6, 3),
              d: 3
            }
          }
        },
        modes: {
          default: ['click-select', 'drag-node']
        }
      });
      graph.node(_ => {
        _._oriLabel = _.label
        return _
      })
      graph.data(data)
      graph.render()
    },

    handleGetSource() {
      const edge = graph.find('edge', _ => _.getModel().label === 'e0-1')
      const getSource = edge.getSource()
      console.log({edge, getSource})
    },

    handleGetTarget() {
      const edge = graph.find('edge', _ => _.getModel().label === 'e0-10')
      const getTarget = edge.getTarget()
      console.log({edge, getTarget})
    },

    handleSetSource() {
      const edge = graph.find('edge', _ => _.getModel().label === 'E1-2')
      const source = graph.findById('4')
      console.log({
        edge,
        source
      })
      /**
       * Todo：不起作用
       */
      edge.setSource(source)
    }
  }
}
</script>

<style scoped>

</style>