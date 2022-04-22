<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleGetStateStyle">GetStateStyle</button>
    <button @click="handleGetOriginStyle">GetOriginStyle</button>
    <button @click="handleGetCurrentStatesStyle">GetCurrentStatesStyle</button>
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
      const {scrollWidth, scrollHeight} = container

      graph = new G6.Graph({
        container,
        width: scrollWidth,
        height: scrollHeight,
        fitView: true,
        layout: {
          type: 'random'
        },
        defaultNode: {
          style: {
            fill: '#c00'
          },
          labelCfg: {
            style: {
              fill: '#fff'
            }
          }
        },
        defaultEdge: {
          type: 'quadratic',
          style: {
            endArrow: {
              path: G6.Arrow.vee(5, 6, 3),
              d: 3
            },
            stroke: '#00c'
          },
          labelCfg: {
            style: {
              fill: '#0f0'
            }
          }
        },
        nodeStateStyles: {
          click: {
            fill: 'green',
            'text-shape': {
              fill: 'white'
            }
          },
          inactive: {
            fill: 'blue',
            'text-shape': {
              fill: 'white'
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
      console.log({
        nodes: graph.getNodes()
      })
    },

    handleGetStateStyle() {
      const item = graph.findById('0')
      console.log({
        selected: item.getStateStyle('selected'),
        click: item.getStateStyle('click'),
        inactive: item.getStateStyle('inactive'),
      })
    },

    handleGetOriginStyle() {
      const item = graph.findById('0')
      console.log({
        getOriginStyle: item.getOriginStyle()
      })
    },

    handleGetCurrentStatesStyle() {
      const item = graph.findById('0')
      console.log({
        getCurrentStatesStyle: item.getCurrentStatesStyle()
      })
    }
  }
}
</script>

<style scoped>

</style>