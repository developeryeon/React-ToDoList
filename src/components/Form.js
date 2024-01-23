import React, { useState } from 'react';
import styles from './Form.module.css';
import '../App.css';

function Form({ toDos, setToDos }) {
	const initial = {
		id: Date.now(),
		text: '',
		body: '',
		isDone: false,
	};

	const [toDo, setTodo] = useState(initial);

	const changeHandler = (event) => {
		const { name, value } = event.target;
		setTodo({ ...toDo, [name]: value, id: Date.now() });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		setToDos([...toDos, toDo]);
		setTodo(initial);
	};

	return (
		<form onSubmit={submitHandler} className={styles.todoForm}>
			<div className={styles.todoWrap}>
				<input type="text" className={styles.todoInput} name="text" placeholder="오늘의 할일을 입력해주세요!" value={toDo.text} onChange={changeHandler} required />
				<input type="text" className={styles.todoInput} name="body" placeholder="할일을 구체적으로 적어보세요" value={toDo.body} onChange={changeHandler} required />
				<button type="submit" className={styles.todoBtn}>
					ADD
				</button>
			</div>
		</form>
	);
}

export default Form;
