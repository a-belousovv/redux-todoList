import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
	name: 'todo',
	initialState: { todos: [], newTodoName: '' },
	reducers: {
		changeTodoName: (state, action) => {
			state.newTodoName = action.payload.text
			console.log(state.newTodoName)
		},
		addTodo: (state, action) => {
			state.todos.push({
				id: state.todos.length + 1,
				value: state.newTodoName,
				completed: false,
				isVisibleChange: false,
				changedValue: '',
			})
			state.newTodoName = ''
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
		},
		completeTodo: (state, action) => {
			const toggleTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			)
			toggleTodo.completed = !toggleTodo.completed
		},
		changeVisibleTodo: (state, action) => {
			const toggleTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			)
			toggleTodo.isVisibleChange = !toggleTodo.isVisibleChange
		},
		changeChangedValue: (state, action) => {
			const toggleTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			)
			toggleTodo.changedValue = action.payload.text
		},
		applyChangeValue: (state, action) => {
			const toggleTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			)
			toggleTodo.value = toggleTodo.changedValue
			toggleTodo.isVisibleChange = !toggleTodo.isVisibleChange
			toggleTodo.changedValue = ''
		},
	},
})

export const {
	addTodo,
	changeTodoName,
	deleteTodo,
	completeTodo,
	changeVisibleTodo,
	changeTodoValue,
	changeChangedValue,
	applyChangeValue,
} = todosSlice.actions
export default todosSlice.reducer
