<template>
    <div class="nav-bar">
        <dl v-for="item of items" :key="item.name">
            <dt>
                <router-link :to="{name: item.name}">{{ item.title }}</router-link>
            </dt>
            <template v-if="item.children">
                <dd v-for="sub of item.children" :key="sub.name">
                    <router-link :to="{name: sub.name}">{{ sub.title }}</router-link>
                </dd>
            </template>
        </dl>
    </div>
</template>

<script>
  import { routes } from '@/router'

  export default {
    name: "NavBar",
    data() {
      return {
        routes
      }
    },
    computed: {
      items() {
        const items = []
        this.routes.filter(item => {
          // console.log('item:', item)
          const subs = item.children && item.children.filter(sub => !sub.hidden && sub.name)
          // console.log('subs:', subs)
          items.push({
            name: item.name,
            title: item.meta && item.meta.title || item.name,
            children: subs.length && subs.map(sub => ({ name: sub.name, title: sub.meta && sub.meta.title || sub.name })) || null
          })
        })
        // console.log('items:', items)
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
.nav-bar dl {
  padding:5px 10px;
}
.nav-bar dd {
  padding:10px 0 0 20px;
}
.nav-bar .router-link-exact-active {
  background-color: yellow;
}
</style>