<template>
  <div>
    <div>
      <button @click="handleToggleMode">切换模式</button>
      <pre>Mode: {{ mode }}</pre>
    </div>
    <div id="container" style="width: 800px;height: 600px;border: 1px solid green;"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import data from './data.json'

const modes = ['default', 'edit']

export default {
  name: "Mode",
  data() {
    return {
      mode: modes[0]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const container = document.getElementById('container');
      const { scrollWidth, scrollHeight } = container
      const graph = new G6.Graph({
        container,
        width: scrollWidth,
        height: scrollHeight,
        fitView: true,
        layout: {
          // 随机布局
          type: 'random'
        },
        // 交互模式 Mode
        modes: {
          /**
           * 默认模式
           */
          default: ['drag-canvas', 'zoom-canvas'],
          /**
           * 默认模式
           */
          edit: ['drag-canvas', 'zoom-canvas', 'click-select'],
        }
      });
      graph.data(data)
      graph.render()

      this.graph = graph
    },
    handleToggleMode() {
      const currentMode = this.graph.getCurrentMode()
      console.log('currentMode:', currentMode)

      const idx = modes.indexOf(currentMode)
      console.log('idx:', idx)

      this.mode = modes[(idx + 1) % modes.length]
      console.log('mode:', this.mode)
      this.graph.setMode(this.mode)
    }
  }
}
</script>

<style scoped>

</style>