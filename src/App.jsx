import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {
	addTodo,
	changeTodoName,
	completeTodo,
	deleteTodo,
	changeVisibleTodo,
	changeChangedValue,
	applyChangeValue,
} from './redux/todosSlice'

function App() {
	const dispatch = useDispatch()
	const todoList = useSelector((state) => state.todo.todos)
	const newTodoName = useSelector((state) => state.todo.newTodoName)
	return (
		<>
			<div>
				<input
					value={newTodoName}
					type='text'
					placeholder='Введите свой новый todo'
					onChange={(e) => dispatch(changeTodoName({ text: e.target.value }))}
				/>
				<button onClick={() => dispatch(addTodo())}>Добавить todo</button>
				<div>
					{todoList.map((item) => {
						return (
							<li
								key={item.id}
								className={item.completed ? 'completeStyle' : ''}
							>
								{item.isVisibleChange ? (
									<div>
										<input
											defaultValue={item.changedValue}
											onChange={(e) =>
												dispatch(
													changeChangedValue({
														text: e.target.value,
														id: item.id,
													})
												)
											}
											type='text'
											placeholder='новое название'
										/>
										<button
											onClick={() =>
												dispatch(applyChangeValue({ id: item.id }))
											}
										>
											подтвердить
										</button>
									</div>
								) : (
									<div>
										<p>{item.value}</p>
										<button
											onClick={() =>
												dispatch(changeVisibleTodo({ id: item.id }))
											}
										>
											изменить
										</button>
									</div>
								)}

								<button onClick={() => dispatch(deleteTodo({ id: item.id }))}>
									delete
								</button>
								<button onClick={() => dispatch(completeTodo({ id: item.id }))}>
									complete
								</button>
							</li>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default App
