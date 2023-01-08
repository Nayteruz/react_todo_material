import React from 'react';
import "./DisplayTodo.css"
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const DisplayTodo = ({isOpen, formData, handleCloseButton, handleEditTodo, handleRemoveTodo}) => {
	return (
		<Dialog open={isOpen} onClose={handleCloseButton}>
			<DialogTitle>
				<div className="display-todo-title">Редактировать запись</div>
			</DialogTitle>
			<DialogContent>
				<div>
					<h2>{formData.todoName}</h2>
					<div>{formData.todoNote}</div>
				</div>

			</DialogContent>
			<DialogActions>
				<div className="display-buttons-wrapper">
					<Button
						type="button"
						color="secondary"
						onClick={handleRemoveTodo}
					>
						Удалить
					</Button>
					<div>
						<Button
							disabled={false}
							type="submit"
							color="success"
							onClick={handleEditTodo}
						>
							Редактировать
						</Button>
						<Button
							type="button"
							color="error"
							onClick={handleCloseButton}
						>
							Закрыть
						</Button>
					</div>
				</div>

			</DialogActions>
		</Dialog>
	);
};

export default DisplayTodo;