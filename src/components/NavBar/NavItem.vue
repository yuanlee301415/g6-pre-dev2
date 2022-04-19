<template>
  <dl>
    <dt>
      <router-link :to="{name: data.name}">{{ data.title }}</router-link>
    </dt>
    <dd v-if="data.children && data.children.length">
      <NavItem
          v-for="item of data.children"
          :key="item.name"
          :data="item"
      />
    </dd>

  </dl>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    data: { type: Object, default: null}
  }
}
</script>

<style scoped>
dd {
  padding-left: 1em;
}
</style>