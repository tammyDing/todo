<template>
  <div id="header">
    <h1>{{ name }} TodoList</h1>
  </div>
</template>

<script>
 export default {
  name: 'Header',
  data () {
    return {
      name: 'Tammy'
    }
  }
 }
</script>

<style lang="stylus" scoped>
#header {
  fontsize 24px 
  font-weight bold
  line-height 48px
  text-align center
  color #535353
  opacity 0.7
}
</style>
