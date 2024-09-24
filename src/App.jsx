import { useState } from 'react';
import './App.css';

export const App = () => {
	const [todoText, setTodoText] = useState('');
	const [incompleteTodos, setIncompleteTodos] = useState([]);
	const [completeTodos, setCompleteTodos] = useState([]);

	const onChangeTodoText = (e) => setTodoText(e.target.value);

	const onClickAdd = () => {
		if (todoText === '') return;
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText('');
	};

	return (
		<>
			<div className="input-area">
				<input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
				<button onClick={onClickAdd}>追加</button>
			</div>
			<div className="incomplete-area">
				<p className="title">未完了のTODO</p>
				<ul>
					{incompleteTodos.map((todo) => (
						<li key={todo}>
							<div className="list-row">
								<p className="todo-item">{todo}</p>
								<button>完了</button>
								<button>削除</button>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">完了のTODO</p>
				<ul>
					{completeTodos.map((todo) => (
						<li key={todo}>
							<div className="list-row">
								<p className="todo-item">{todo}</p>
								<button>戻す</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
