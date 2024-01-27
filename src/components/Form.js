import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export default function Form({ toDos, setToDos }) {
	const initial = {
		id: Date.now(),
		text: '',
		body: '',
		isDone: false,
	};

	const [toDo, setTodo] = useState(initial);

	const changeHandler = (event) => {
		const { name, value } = event.target;
		// console.log(name, value);
		setTodo({ ...toDo, [name]: value, id: Date.now() });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		setToDos([...toDos, toDo]);
		setTodo(initial);
	};

	return (
		<StyledForm onSubmit={submitHandler}>
			<InputWrap>
				<InputBox type="text" name="text" placeholder="오늘의 할일을 입력해주세요!" value={toDo.text} onChange={changeHandler} required />
				<InputBox type="text" name="body" placeholder="할일을 구체적으로 적어보세요" value={toDo.body} onChange={changeHandler} required />
				<InputBtn type="submit">ADD</InputBtn>
			</InputWrap>
		</StyledForm>
	);
}

const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.2rem;
	background-color: aliceblue;
`;

const InputWrap = styled.div`
	width: 1000px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 1rem;
`;

const InputBox = styled.input`
	margin: 10px;
	border-radius: 10px;
	border: none;
	padding: 1rem 3.8rem;
	margin-top: 1rem;
`;

const InputBtn = styled.button`
	display: flex;
	flex-direction: row;
	padding: 1rem 1.1rem;
	margin: 10px;
	border-radius: 10px;
	border: none;
	background-color: lightpink;
	color: #fff;
	font-weight: bold;
	cursor: pointer;
	&:hover {
		transition: all 0.3s;
		background-color: #dabcfc;
	}
`;
