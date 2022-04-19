



<template>
  <div role="tree" style="height: 100%;overflow: hidden;">

    <ModelTreeSearch
      v-if="showSearch"
      ref="modelTreeSearch"
    />


    <div v-if="data" ref="treeBox" :class="classes" class="tree treeBox" onselectstart="return false">

      <ul class="tree-container-ul tree-children" role="group">
        <tree-item v-if="loading" :data="initializeLoading()" />
        <template v-else>
          <tree-item
              v-for="(child, index) in data"
              ref="tree"
              :key="index"
              :data="child"
              :text-field-name="textFieldName"
              :value-field-name="valueFieldName"
              :children-field-name="childrenFieldName"
              :height="sizeHeight"
              :parent-item="data"
              :on-item-click="onItemClick"
              :on-item-dblclick="onItemDblclick"
              :on-item-toggle="onItemToggle"
              :klass="index === data.length-1?'tree-last':''"
          >
            <template slot-scope="_">
              <div class="text">
                <slot :vm="_.vm" :model="_.model">
                  <div v-html="_.model[textFieldName]"></div>
                </slot>
              </div>
            </template>
          </tree-item>
        </template>
      </ul>

    </div>

  </div>
</template>

<script>
import ModelTreeSearch from '@/components/ModelTreeSearch'
import ModelTree from "./ModelTree";
import TreeItem from './TreeItem.vue'


let ITEM_HEIGHT_SMALL = 18
let ITEM_HEIGHT_DEFAULT = 24
let ITEM_HEIGHT_LARGE = 32

export default {
  name: 'ModelTee',

  components: {
    ModelTreeSearch,
    TreeItem
  },

  props: {

    data: {type: Array, default: null},


    size: {type: String, default: null, validator: value => ['large', 'small'].indexOf(value) > -1},


    collapse: {type: Boolean, default: true},


    textFieldName: {type: String, default: 'displayName'},


    valueFieldName: {type: String, default: 'name'},


    childrenFieldName: {type: String, default: 'children'},


    loadingText: {type: String, default: 'Loading...'},


    klass: { type: String, default: null },


    timeout: { type: Number, default: 1000},


    delay: { type: Number, default: 300},


    showSearch: { type: Boolean, default: true},


    loaded: { type: Function, default: null}
  },

  data() {
    return {

      loading: true
    }
  },

  computed: {
    classes() {
      return [
        {'tree-default': !this.size},
        {[`tree-default-${this.size}`]: !!this.size},
        {[this.klass]: !!this.klass},
        {'hasSearch': this.showSearch}
      ]
    },
    sizeHeight() {
      switch (this.size) {
        case 'large':
          return ITEM_HEIGHT_LARGE
        case 'small':
          return ITEM_HEIGHT_SMALL
        default:
          return ITEM_HEIGHT_DEFAULT
      }
    }
  },

  created() {
    this.asyncInitializeData(this.data, () => {
      this.loading = false
      this.loaded && this.loaded()
      this.showSearch && setTimeout(() => {
        this.$refs['modelTreeSearch'].setTreeRef({
          tree: this,
          treeBox: this.$refs['treeBox']
        })
      })
    })
  },

  methods: {

    handleRecursionNode(node, func) {
      if (func(node) !== false) {
        if (node.$children && node.$children.length > 0) {
          for (const childNode of node.$children) {
            if (!childNode.disabled) {
              this.handleRecursionNode(childNode, func)
            }
          }
        }
      }
    },


    onItemClick(oriNode, oriItem, e) {
      this.handleSingleSelectItems(oriNode, oriItem)
      this.$emit('item-click', oriNode, oriItem, e)
    },


    onItemDblclick(oriNode, oriItem, e) {
      this.handleSingleSelectItems(oriNode, oriItem)
      this.$emit('item-dblclick', oriNode, oriItem, e)
    },


    handleSingleSelectItems(oriNode) {
      this.handleRecursionNode(this, node => {
        if (node.model) node.model.selected = false
      })
      oriNode.model.selected = true
    },


    onItemToggle(oriNode, oriItem, e) {
      this.$emit('item-toggle', oriNode, oriItem, e)
    },


    initializeLoading() {
      const item = {}
      item[this.textFieldName] = this.loadingText
      item.disabled = true
      item.loading = true
      return this.initializeDataItem(item)
    },


    initializeDataItem(item) {
      const node = Object.assign(new ModelTree(item, this.textFieldName, this.valueFieldName, this.childrenFieldName, this.collapse), item)
      const self = this
      node.addChild = function (data) {
        const newItem = self.initializeDataItem(data)
        node.opened = true
        node[self.childrenFieldName].push(newItem)
      }
      return node
    },


    asyncInitializeData(items, cb) {
      if (!items) {
        cb()
        return
      }

      const start = Date.now()
      const length = items.length
      const recursion = (items, item, idx, level, asyncRecursion) => {
        this.$set(items, idx, this.initializeDataItem(items[idx]))
        if (item[this.childrenFieldName]) {
          level++
          asyncRecursion(item[this.childrenFieldName])
          level--
        }
        idx++
        asyncRecursion(items, level, idx)
      }
      const asyncRecursion = (items, level = 0, idx = 0) => {
        const item = items[idx]
        if (item) {
          if (Date.now() - start > this.timeout) {
            recursion(items, item, idx, level, asyncRecursion)
          } else {
            setTimeout(() => {
              recursion(items, item, idx, level, asyncRecursion)
            }, this.delay)
          }
        }


        if (level === 0 && idx === length) {
          cb()
        }
      }

      asyncRecursion(items)
    }
  }
}
</script>

<style scoped>
@import "styles.css";
</style>