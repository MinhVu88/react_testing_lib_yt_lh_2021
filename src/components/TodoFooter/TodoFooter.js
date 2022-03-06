import React from 'react';
import { Link } from "react-router-dom";
import "./TodoFooter.css";

function TodoFooter({ incompleteTasks }) {
	return (
		<div className="todo-footer">
			<p data-testid='undone-tasks'>
				{incompleteTasks} {incompleteTasks === 1 ? "task" : "tasks"} left
			</p>
			<Link to="/followers">Followers</Link>
		</div>
	);
};

export default TodoFooter;
