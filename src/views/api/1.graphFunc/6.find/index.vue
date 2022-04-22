<template>
  <div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
    <button @click="handleGetNodes">GetNodes</button>
    <button @click="handleGetEdges">GetEdges</button>
    <button @click="handleGetCombos">GetCombos</button>
    <button @click="handleGetNeighbors">GetNeighbors</button>
    <button @click="handleFind">Find</button>
    <button @click="handleFindById">FindById</button>
    <button @click="handleFindAll">FindAll</button>
    <button @click="handleFindAllByState">FindAllByState</button>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from '../../data2.json'

let graph

export default {
  name: "Find",
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
        },
        defaultEdge: {
          type: 'line',
          style: {
            endArrow: {
              path: G6.Arrow.vee(5, 6, 3),
              d: 3
            }
          }
        },
        modes: {
          default: ['click-select']
        }
      });
      graph.data(data)
      graph.render()
    },

    handleFitView() {
      graph.fitView()
    },

    handleGetNodes() {
      const nodes = graph.getNodes()
      console.log('nodes:', nodes)
    },

    handleGetEdges() {
      const edges = graph.getEdges()
      console.log('edges:', edges)
    },

    handleGetCombos() {
      const combos = graph.getCombos()
      console.log('combos:', combos)
    },

    handleGetNeighbors() {
      const selected = graph.findAllByState('node', 'selected')
      if (!selected.length) {
        return
      }

      const allNeighbors = graph.getNeighbors(selected[0])
      const sourceNeighbors = graph.getNeighbors(selected[0], 'source')
      const targetNeighbors = graph.getNeighbors(selected[0], 'target')
      console.log({
        allNeighbors,
        sourceNeighbors,
        targetNeighbors
      })
    },

    handleFind() {
      const node = graph.find('node', _ => {
        return _.getModel().label === '2'
      })
      console.log(node)
    },

    handleFindById() {
      const node = graph.findById('2')
      console.log(node)
    },

    handleFindAll() {
      const noTargets = graph.findAll('node', _ => {
        const targets = graph.getNeighbors(_, 'target')
        return targets.length === 0
      })
      console.log(noTargets.map(_ => _.getModel().label))
    },

    handleFindAllByState() {
      const selected = graph.findAllByState('node', 'selected')
      console.log(selected.map(_ => _.getModel().label))
    }

  }
}
</script>

<style scoped>

</style>