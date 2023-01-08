import React from 'react';
import "./TodoRender.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Todo = ({id, todoName, isFinished, checkTodo, handleOpenTodo}) => {

	const isFinishTodo = isFinished ? 'todo-finished' : '';

	return (
		<div className="todo-container">
			<span>
				<Checkbox
					color="secondary"
					icon={<RadioButtonUncheckedIcon/>}
					checkedIcon={<TaskAltIcon color="primary"/>}
					checked={isFinished}
					onChange={() => checkTodo(id)}
				/>
			</span>
			<div className="todo-item" onClick={() => handleOpenTodo(id)}>
				<span className={isFinishTodo}>{todoName}</span>
				<ChevronRightIcon fontSize="small" />
			</div>
		</div>
	)
}

const TodoRender = ({todos, checkTodo, handleOpenTodo}) => {
	return (
		<div className="todos-render-wrapper">
			{todos.map(todo =>
				<Todo key={todo.id} {...todo} checkTodo={checkTodo} handleOpenTodo={handleOpenTodo} />
			)}
		</div>
	);
};

export default TodoRender;