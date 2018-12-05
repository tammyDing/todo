<template>
	<div class="todo-wrapper">
		<input type="text" placeholder="做点什么好呢？"
			@keyup.enter="addTodo">
		<Item v-for="todo in tabsTodo" :key="todo.id" :todo="todo"
			@del="deleteTodo" />
		<Tabs :filter="filter" :todos="todos" 
			@toggle="toggleState" 
			@clearAll="clearAllComponents" />
	</div>
</template>

<script>
import Item from './item.vue'
import Tabs  from './tabs.vue'

let n = 0

export default {
	name: 'Todo',
	data () {
		return {
			todos: [],
			filter: 'All'
		}
	},
	components:{
		Item,
		Tabs
	},
	computed: {
		tabsTodo () {
			if (this.filter === 'All') {
				return this.todos
			}
			const completed = this.filter === 'Completed'
			return this.todos.filter(todo => completed === todo.completed)
		} 
	},
	methods: {
		addTodo (e) {
			// 空
			if (!e.target.value) return
			// 已存在
			this.todos.unshift({
				id: n++,
				content: e.target.value.trim(),
				completed: false
			})
			
			e.target.value = ''
		},
		deleteTodo (id) {
			console.log('id', id) 
			this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
		},
		toggleState (tab) {
			this.filter = tab
		},
		clearAllComponents () {
			this.todos = []
		}
	}
}
</script>

<style lang="stylus" scoped>
.todo-wrapper {
	width 600px
	margin 0 auto
	position relative
	input {
		outline none
		font-size 24px 
		line-height 48px
		width 100%
		padding 10px
		border none
		border-bottom 1px solid #abcdef
	}
}
</style>
