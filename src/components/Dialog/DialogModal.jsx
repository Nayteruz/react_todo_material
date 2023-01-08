import React from 'react';
import styles from "./DialogModal.module.css"
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DialogModal = ({isOpen, handleOpenDialog, formData, handleSetFieldValue, handleSetTodoOnSubmit}) => {

	return (
		<Dialog open={isOpen} onClose={handleOpenDialog}>
			<DialogTitle>
				<span>{ formData.isEdit ? 'Редактировать запись' : 'Добавить запись' }</span>
			</DialogTitle>
			<DialogContent>
				<form onSubmit={handleSetTodoOnSubmit} className={styles.form}>
					<TextField
						label="Название"
						value={formData.todoName}
						onChange={(e) => handleSetFieldValue('todoName', e.target.value)}
					/>
					<TextField
						label="Описание"
						multiline
						minRows={4}
						value={formData.todoNote}
						onChange={(e) => handleSetFieldValue('todoNote', e.target.value)}
					/>
					<DialogActions>
						<Button
							disabled={!formData.todoName}
							type="submit"
							color="success"
						>
							{formData.isEdit ? 'Редактировать' : 'Добавить'}
						</Button>
						<Button
							type="button"
							color="error"
							onClick={handleOpenDialog}
						>
							Закрыть
						</Button>
					</DialogActions>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default DialogModal;