<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleHide">Hide</button>
    <button @click="handleShow">Show</button>
    <button @click="handleChangeVisibility">ChangeVisibility</button>
    <button @click="handleToFront">ToFront</button>
    <button @click="handleSetState">SetState</button>
    <button @click="handleClearStates">ClearStates</button>
    <button @click="handleGetStates">GetStates</button>
    <button @click="handleHasState">HasState</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data.json'

let graph

export default {
  name: "ItemState",
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
            },
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

    handleHide() {
      const item = graph.findById('0')
      item.hide()
    },

    handleShow() {
      const item = graph.findById('0')
      item.show()
    },

    handleChangeVisibility() {
      const item = graph.findById('1')
      const isVisible = item.isVisible()
      item.changeVisibility(!isVisible)
    },

    handleToFront() {
      const item = graph.findById('0')
      item.toFront()
    },

    handleSetState() {
      const item0 = graph.findById('0')
      item0.setState('selected', true)

      const item1 = graph.findById('1')
      item1.setState('click', true)

      const item2 = graph.findById('2')
      item2.setState('active', true)

      const item3 = graph.findById('3')
      item3.setState('highlight', true)

      const item4 = graph.findById('4')
      item4.setState('inactive', true)

      const item5 = graph.findById('5')
      item5.setState('disable', true)
    },

    handleClearStates() {
      const item0 = graph.findById('0')
      item0.clearStates(['selected'])

      const item1 = graph.findById('1')
      item1.clearStates(['click'])

      const item2 = graph.findById('2')
      item2.clearStates(['active'])

      const item3 = graph.findById('3')
      item3.clearStates(['highlight'])

      const item4 = graph.findById('4')
      item4.clearStates(['inactive'])

      const item5 = graph.findById('5')
      item5.clearStates(['disable'])
    },

    handleGetStates() {
      const item0 = graph.findById('0')
      const item1 = graph.findById('1')
      const item2 = graph.findById('2')
      const item3 = graph.findById('3')
      const item4 = graph.findById('4')
      const item5 = graph.findById('5')

      console.log({
        item0: item0.getStates(),
        item1: item1.getStates(),
        item2: item2.getStates(),
        item3: item3.getStates(),
        item4: item4.getStates(),
        item5: item5.getStates(),
      })
    },

    handleHasState() {
      const item0 = graph.findById('0')
      const item1 = graph.findById('1')
      const item2 = graph.findById('2')
      const item3 = graph.findById('3')
      const item4 = graph.findById('4')
      const item5 = graph.findById('5')

      console.log({
        selected: item0.hasState('selected'),
        click: item1.hasState('click'),
        active: item2.hasState('active'),
        highlight: item3.hasState('highlight'),
        inactive: item4.hasState('inactive'),
        disable: item5.hasState('disable')
      })
    },

  }
}
</script>

<style scoped>

</style>