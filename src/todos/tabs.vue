<template>
  <div class="tabs">
    <div class="left"> {{ unFihishedLength }} item left</div>
    <div class="tabs-item">
      <span v-for="tab in tabs" :key="tab" :class="filter === tab ? 'active' : ''"
        @click="toggleFilter(tab)"> {{ tab }} </span>
    </div>
    <div class="right" @click="clearAllComponents"> Clear Components</div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      tabs: ['All', 'Active', 'Completed']
    }
  },
  computed: {
    unFihishedLength () {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    toggleFilter (tab) {
      this.$emit('toggle', tab)
    },
    clearAllComponents () {
      this.$emit('clearAll')
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabs {
  display flex
  flex-direcation row
  justify-content space-between 
  background-color #fff
  padding 0 15px
}
.left, .tabs-item, .right {
  height 60x
  line-height 60px
}
.right {
  cursor pointer
}
.tabs-item span {
  display inline-block
  margin 0 10px
  cursor pointer
  &.active {
    color rgba(211, 75, 57, .5)
  }
}
</style>
