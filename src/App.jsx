import { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
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

	const onClickDelete = (index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);
	};

	const onClickComplete = (index) => {
		const newIncompleteTodos = [...incompleteTodos];
		newIncompleteTodos.splice(index, 1);

		const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
		setIncompleteTodos(newIncompleteTodos);
		setCompleteTodos(newCompleteTodos);
	};

	const onClickBack = (index) => {
		const newCompleteTodos = [...completeTodos];
		newCompleteTodos.splice(index, 1);

		const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
		setCompleteTodos(newCompleteTodos);
		setIncompleteTodos(newIncompleteTodos);
	};

	const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

	return (
		<>
			<InputTodo
				todoText={todoText}
				onChange={onChangeTodoText}
				onClick={onClickAdd}
				disabled={isMaxLimitIncompleteTodos}
			/>
			{isMaxLimitIncompleteTodos && <p style={{ color: 'red' }}>登録上限は5件です</p>}
			<IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
			<CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
		</>
	);
};
