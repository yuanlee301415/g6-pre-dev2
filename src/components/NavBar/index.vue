<template>
    <div class="nav-bar">
      <div style="padding: 10px;">
        <NavItem
            v-for="item of items"
            :key="item.name"
            :data="item"
        />
      </div>
    </div>
</template>

<script>
  import { routes } from '@/router'
  import NavItem from "@/components/NavBar/NavItem";

  export default {
    name: "NavBar",

    components: {
      NavItem
    },

    data() {
      return {
        items: null
      }
    },

    created() {
      this.items = this.initItems(routes)
      // console.log('this.items:\n', JSON.stringify(this.items, null, 2))
    },

    methods: {
      initItems(routes, list = []) {
        function IIFE(routes, items, parentName = '') {
          for (const route of routes) {
            if (route.hidden === true) continue

            const {name, meta } = route
            if (name && meta && meta.title) {
              list.push({
                name,
                title: meta.title,
                parentName,
                children: []
              })
            }

            if (route.children) {
              IIFE(route.children, list, route.name || parentName)
            }
          }
        }

        IIFE(routes)

        const parentMap = new Map()
        list.forEach((_) => {
          parentMap.set(_.name, _);
        });
        // console.log('list:\n', JSON.stringify(list, null, 2))

        const items = []
        list.forEach((_) => {
          const parent = parentMap.get(_.parentName);
          if (parent) {
            parent.children.push(_);
          } else {
            items.push(_);
          }
        });

        return items
      }
    }
  }
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: auto;
  border-right: 1px solid #999;
}
</style>