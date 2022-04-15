<template>
  <li role="treeitem"
      :id="model._id"
      :class="classes"
>
    <i class="tree-icon tree-ocl" role="presentation" @click="handleItemToggle"></i>
    <div :class="anchorClasses" v-on="events">
      <slot :vm="this" :model="model">
        <i class="tree-themeicon" role="presentation" v-if="!model.loading"></i>
        <span v-html="model[textFieldName]"></span>
      </slot>
    </div>
    <ul v-if="isFolder" :style="groupStyle" role="group" ref="group" class="tree-children" >
      <tree-item v-for="(child, index) in model[childrenFieldName]"
                 :key="index"
                 :data="child"
                 :text-field-name="textFieldName"
                 :value-field-name="valueFieldName"
                 :children-field-name="childrenFieldName"
                 :height= "height"
                 :parent-item="model[childrenFieldName]"
                 :on-item-click="onItemClick"
                 :on-item-toggle="onItemToggle"
                 :klass="index === model[childrenFieldName].length-1?'tree-last':''">
        <template slot-scope="_">
          <slot :vm="_.vm" :model="_.model">
            <i class="tree-themeicon" role="presentation" v-if="!model.loading"></i>
            <span v-html="_.model[textFieldName]"></span>
          </slot>
        </template>
      </tree-item>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'TreeItem',
  props: {
    data: {type: Object, required: true},
    textFieldName: {type: String, default: 'displayName'},
    valueFieldName: {type: String, default: 'name'},
    childrenFieldName: {type: String, default: 'children'},

    parentItem: {type: Array, default: null},

    height: {type: Number, default: 24},
    onItemClick: {
      type: Function, default: () => false
    },
    onItemToggle: {
      type: Function, default: () => false
    },
    klass: String
  },

  data () {
    return {
      isHover: false,
      model: this.data,
      events: {}
    }
  },

  computed: {
    isFolder () {
      return this.model[this.childrenFieldName] && this.model[this.childrenFieldName].length
    },
    classes () {
      return [
        {'tree-node': true},
        {'tree-open': this.model.opened},
        {'tree-closed': !this.model.opened},
        {'tree-leaf': !this.isFolder},
        {'tree-loading': !!this.model.loading},
        {[this.klass]: !!this.klass}
      ]
    },
    anchorClasses () {
      return [
        {'tree-anchor': true},
        {'tree-disabled': this.model.disabled},
        {'tree-selected': this.model.selected},
        {'tree-hovered': this.isHover}
      ]
    },

    groupStyle () {
      return {
        'position': this.model.opened ? '' : 'relative',
        'display': this.model.opened ? 'block' : 'none'
      }
    }
  },

  watch: {
    data (newValue) {
      this.model = newValue
    },
    'model.opened': {
      handler: function () {
        this.onItemToggle(this, this.model)
      },
      deep: true
    }
  },

  created () {
    const events = {
      'click': this.handleItemClick,
      'mouseover': this.handleItemMouseOver,
      'mouseout': this.handleItemMouseOut
    }
    this.events = events
  },

  methods: {
    handleItemToggle () {
      if (this.isFolder) {
        this.model.opened = !this.model.opened
        this.onItemToggle(this, this.model)
      }
    },
    handleItemClick (e) {
      if (this.model.disabled) return
      this.model.selected = !this.model.selected
      this.onItemClick(this, this.model, e)
    },

    handleItemMouseOver () {
      this.isHover = true
    },

    handleItemMouseOut () {
      this.isHover = false
    }
  }
}
</script>
