import React from 'react';
import styles from "./TodoHeader.module.css"

import moment from "../../utils/momentLocale.js";
import AddIcon from '@mui/icons-material/Add';
import DialogModal from "../Dialog/DialogModal.jsx";
import DisplayTodo from "../DisplayTodo/DisplayTodo.jsx";

const TodoHeader = ({
	    isOpen,
	    handleOpenDialog,
	    formData,
	    handleSetFieldValue,
	    handleSetTodoOnSubmit,
		isOpenDisplayTodo,
		handleCloseButton,
		handleEditTodo,
		handleRemoveTodo,
        totalCount
	}) => {

	const weekday = moment().format('dddd');
	const date = moment().date();

	return (
		<div className={styles['todo-header']}>

			<div className={styles.wrapper}>
				<div className={styles['todo-count']}>
					<span className={styles.finished}>{totalCount.finished}</span>

					<div className={styles.total}>
						<span>Задач</span>
						<span>/ {totalCount.total}</span>
					</div>
				</div>
				<div>
					<span className={styles['weekDay']}>{weekday}</span>
					<span className={styles.date}>{date}</span>
				</div>
			</div>
			<div className={styles['add-todo']} onClick={handleOpenDialog}>
				<span className={styles['icon-add']}>
					<AddIcon sx={{fontSize:48}}/>
				</span>
			</div>
			<DialogModal
				isOpen={isOpen}
				handleOpenDialog={handleOpenDialog}
				formData={formData}
				handleSetFieldValue={handleSetFieldValue}
				handleSetTodoOnSubmit={handleSetTodoOnSubmit}
			/>
			<DisplayTodo
				formData={formData}
				isOpen={isOpenDisplayTodo}
				handleCloseButton={handleCloseButton}
				handleEditTodo={handleEditTodo}
				handleRemoveTodo={handleRemoveTodo}
			/>
		</div>
	);
};

export default TodoHeader;