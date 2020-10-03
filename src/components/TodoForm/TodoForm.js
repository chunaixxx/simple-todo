import React, { useState } from "react";

//import './TodoList.css';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Material UI CSS
const useStyles = makeStyles((theme) => ({
	form: {
		marginTop: '15px'
	},

	form__textarea: {
		width: '400px'
	},

	form__submit: {
		margin: '10px 0 0 10px',
		backgroundColor: '#4caf50',
		color: '#fff',

		'&:hover': {
			backgroundColor: '#81c784',
		}
	},
}));

let TodoForm = props => {
	const classes = useStyles();

	const [textAreaValue, setTextAreaValue] = useState('');

	const handleChangeTextField = e => 
		setTextAreaValue(e.target.value);

	const handleNewTodo = () => {
		props.addTodo(textAreaValue);
		setTextAreaValue('');
	}

	const handleKeyPress = e => {
		if (e.key === "Enter") handleNewTodo();
	}

	return (
		<form className={classes.form} onSubmit={e => e.preventDefault()} noValidate autoComplete="off">
			<TextField
				value={textAreaValue} 
				onChange={handleChangeTextField} 
				className={classes.form__textarea} 
				id="standard-basic" 
				label="TODO"
				onKeyPress={handleKeyPress}
			/>
			
			<Button         
				variant="contained"
				className={classes.form__submit}
				onClick={() => handleNewTodo()}
			>
				ADD
			</Button>
		</form>
	)
}

export default TodoForm;