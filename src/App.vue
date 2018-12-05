<template>
  <div id="app">
    <v-header></v-header>
    <todo></todo>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './todos/header'
import vFooter from './todos/footer'
import todo from './todos/todo'

export default {
  name: 'App',
  components: {
    vHeader,
    vFooter,
    todo
  }
}
</script>

<style lang="stylus" scoped>
#app {
  width 100%
  padding 10px
  height auto
  min-height 100vh
  background-image url('./assets/images/star-bg.svg')
  background-color rgba(17, 27, 37, .2)
}
</style>
