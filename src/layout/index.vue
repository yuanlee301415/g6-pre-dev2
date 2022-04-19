<template>
    <div id="main" class="main">
        <div class="side">
          <nav-bar></nav-bar>
        </div>
        <div class="content">
            <h1>{{ title }}</h1>
            <hr>
            <br>
            <transition name="fade-transform" mode="out-in">
                <template>
                    <router-view :key="key" />
                </template>
            </transition>
        </div>
    </div>
</template>

<script>
  import NavBar from "@/components/NavBar"
  export default {
    name: "Layout",
    components: {
      NavBar
    },
    computed: {
      key() {
        return this.$route.path
      },
      title() {
        // console.log('$route:', this.$route)
        return this.$route.meta.title
      }
    }
  }
</script>

<style scoped>
.side {
  width: 250px;
}
.content {
  padding:20px 20px 20px 300px;
}
</style>
