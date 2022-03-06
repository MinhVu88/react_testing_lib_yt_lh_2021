import React, { useState } from 'react';
import Header from '../Header/Header';
import AddInput from '../AddInput/AddInput';
import TodoList from '../TodoList/TodoList';
import "./Todo.css";

function Todo() {
	const [todos, setTodos] = useState([]);

	return (
		<div className="todo">
			<Header title="React Testing Library tutorial 2021" />
			<AddInput 
				setTodos={setTodos}
				todos={todos}
			/>
			<TodoList 
				todos={todos}
				setTodos={setTodos}
			/>
		</div>
	);
};

export default Todo;
