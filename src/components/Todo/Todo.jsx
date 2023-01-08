import React, {useState} from 'react';
import "./Todo.css"
import TodoHeader from "../TodoHeader/TodoHeader.jsx";
import TodoAction from "../TodoActions/TodoAction.jsx";
import TodoRender from "../TodoRender/TodoRender.jsx";
import uuid from "react-uuid";

const initialFormData = {
	isEdit: false,
	todoName: '',
	todoNote: '',
	isFinished: false,
	id: '',
}

const Todo = () => {

	const [tab, setTab] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false);
	const [todos, setTodos] = useState([]);
	const [formData, setFormData] = useState(initialFormData);

	const getTotalFinish = (todos) => {
		return todos.reduce((acc, cur) => {
			acc.total = todos.length;
			if (cur.isFinished) {
				acc.finished += 1;
			}
			return acc;
		}, {total: 0, finished: 0})
	}

	const totalCount = getTotalFinish(todos);

	const handleOpenDialog = () => {
		setIsOpen(prev => !prev)
		if (isOpen){
			clearTodoForms();
		}
	}

	const clearTodoForms = () => {
		setFormData(initialFormData);
		setIsOpen(false);
		setIsOpenDisplayTodo(false);
	}

	const handleSetFieldValue = (fieldName, value) =>
		setFormData((prevState) => ({...prevState, [fieldName]: value}));

	const handleChangeTab = (tabValue) => {
		setTab(tabValue);
	}

	const filterTodos = (activeTabIndex, todos) => {
		if (activeTabIndex === 0) {
			return todos;
		} else if (activeTabIndex === 1) {
			return todos.filter(todo => !todo.isFinished);
		} else if (activeTabIndex === 2) {
			return todos.filter(todo => todo.isFinished);
		}
	}

	const sortedTodos = filterTodos(tab, todos);

	const handleSetTodoOnSubmit = (e) => {
		e.preventDefault();

		if (formData.isEdit){
			setTodos((prev) => {
				return prev.map(todo => {
					if (todo.id === formData.id){
						todo.todoName = formData.todoName;
						todo.todoNote = formData.todoNote;
						return todo;
					}
					return todo;
				})
			})
		} else {
			setTodos(prev => [...prev, {...formData, id: uuid()}])
		}

		clearTodoForms()
	}

	const checkTodo = (id) => {
		setTodos((prev) => {
			return prev.map(todo => {
				if (todo.id === id){
					todo.isFinished = !todo.isFinished;
					return todo;
				}
				return todo;
			})
		})
	}

	const handleOpenTodo = (id) => {
		const todo = todos.filter(todo => todo.id === id)[0];
		setIsOpenDisplayTodo(true);
		setFormData(todo);
	}

	const handleEditTodo = () => {
		setFormData((prevState) => ({...prevState, isEdit: true}))
		setIsOpenDisplayTodo(false);
		handleOpenDialog();
	}

	const handleRemoveTodo = () => {
		setTodos(prev => prev.filter(todo => todo.id !== formData.id))
		clearTodoForms()
	}

	return (
		<div className="todo-wrapper">
			<TodoHeader
				isOpen={isOpen}
				handleOpenDialog={handleOpenDialog}
				handleSetFieldValue={handleSetFieldValue}
				formData={formData}
				handleSetTodoOnSubmit={handleSetTodoOnSubmit}
				handleEditTodo={handleEditTodo}
				isOpenDisplayTodo={isOpenDisplayTodo}
				handleRemoveTodo={handleRemoveTodo}
				handleCloseButton={clearTodoForms}
				totalCount={totalCount}
			/>

			<TodoAction handleChangeTab={handleChangeTab} tab={tab}/>

			<TodoRender todos={sortedTodos} checkTodo={checkTodo} handleOpenTodo={handleOpenTodo}/>
		</div>
	);
};

export default Todo;