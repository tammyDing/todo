<template>
  <div :class="['item-wrapper', todo.completed ? 'completed' : '']">
    <input type="checkbox"
      class="toggle" v-model="todo.completed">
    <label for=""> {{ todo.content }} </label>
    <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo () {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.item-wrapper {
  width 600px
  margin 0 auto
  position relative
  background-color #fff
  height 64px
  line-height 64px
  color #585858
  border-bottom 1px solid #f2f2f2
  &.completed {
    text-decoration line-through
    color #bbbbbb
  }
  &:hover {
    .destory:after {
      content: 'x'
    }
  }
  &:hover {
    .destory:hover {
      color rgba(211, 75, 57, .9)
    }
  }
  label {
    padding-left 64px
    line-height 30px
    font-size 22px
  }
}
.toggle {
  width 40px 
  height 40px
  line-height 40px
  text-align center
  appearance none
  cursor pointer
  position absolute
  top 8px
  bottom 0
  border none
  outline none
  &:after {
    content url('./../assets/images/round.svg')
  }
  &:checked:after {
    content url('./../assets/images/done.svg')
  }
}
.destory {
  position absolute
  top 8px 
  right 10px
  width 40px 
  height 40px
  line-height 40px
  text-align center
  margin auto 0;
  font-size 20px;
  color #bbbbbb;
  background-color transparent
  appearance none
  border-width 0
  cursor pointer
  outline none
}
</style>
