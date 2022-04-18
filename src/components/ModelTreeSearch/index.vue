<!--
树搜索组件
-->

<template>
  <div class="searchBox">
    <el-input
        v-model.trim="keyword"
        type="text"
        placeholder="search"
        maxlength="250"
        clearable
        prefix-icon="el-icon-search"
        class="searchInput"
        @keydown.enter.native="handleSearch"
        @clear="handleSearch"
    />
    <div class="searchButtons">
      <i class="el-icon-arrow-up" @click="handleSearch(1)"></i>
      <i class="el-icon-arrow-down" @click="handleSearch(-1)"></i>
    </div>
  </div>
</template>

<script>

const highlightBgColor = '#ff0'


const currentBgColor = '#ff9632'


const textCls = '.text'

export default {
  name: "ModelTreeSearch",
  data() {
    return {

      tree$ref: null,


      treeBox$ref: null,


      keyword: '',


      lastKeyword: '',


      matchedElementIds: [],


      matchedIdx: 0,


      lastMatchedElementId: ''
    }
  },
  methods: {
    setTreeRef({ tree, treeBox }) {
      this.tree$ref = tree
      this.treeBox$ref = treeBox
    },

    handleSearch(dir) {
      if (!this.treeBox$ref) return;

      if (this.lastKeyword !== this.keyword) {
        this.lastKeyword = this.keyword
        this.matchedElementIds = []
        this.lastMatchedElementId = ''
        this.matchedIdx = 0

        this.tree$ref.handleRecursionNode(this.tree$ref, (node) => {
          if (!node.model) return

          const $text = node.$el.querySelector(textCls)
          if (!$text) return;

          if (this.keyword) {
            const text = $text.innerHTML
            if (text && text.toUpperCase().includes(this.keyword.toUpperCase())) {
              $text.style.backgroundColor = highlightBgColor
              this.matchedElementIds.push(node.$el.id)
            } else {
              $text.style.backgroundColor = 'inherit'
            }
          } else {
            $text.style.backgroundColor = 'inherit'
          }
        })
      }


      if (this.lastMatchedElementId) {
        const elm = document.getElementById(this.lastMatchedElementId)
        if (elm) {
          elm.querySelector(textCls).style.backgroundColor = highlightBgColor
        }
      }

      if (!this.matchedElementIds) return


      if (dir === 1 && this.matchedIdx === 0) {
        this.matchedIdx = 1
      }


      this.matchedIdx += dir + this.matchedElementIds.length


      const currentId = this.matchedElementIds[this.matchedIdx % this.matchedElementIds.length]
      const elm = document.getElementById(currentId)
      if (!elm) return;

      if (elm.offsetHeight === 0) {
        this.handleSearch(dir)
        return;
      }



      this.treeBox$ref.scrollTop = elm.offsetTop - this.treeBox$ref.$el.offsetHeight / 2 + 50


      elm.querySelector(textCls).style.backgroundColor = currentBgColor

      this.lastMatchedElementId = currentId
    }
  }
}
</script>

<style scoped>
.searchBox {
  height: 32px;
  margin-bottom: 5px;
}
.searchInput {
  float: left;
  width: calc(100% - 74px);
  height: 100%;
}
.searchButtons {
  float: right;
  width: 64px;
  height: 100%;
}
.searchButtons > i {
  display: inline-block;
  width: 30px;
  text-align: center;
  height: 100%;
  line-height: 2.0;
  border: 1px solid #c0bebe;
  cursor: pointer;
  background-color: #e8e8e8;
}
.searchButtons > i:first-child {
  border-radius: 2px 0 0 2px;
  border-right: none;
}
.searchButtons > i:last-child {
  border-radius: 0 2px 2px 0;
}
.searchButtons > i:hover {
  background-color: #fff;
}
</style>
