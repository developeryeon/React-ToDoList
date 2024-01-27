import styled from 'styled-components';
import React, { useState } from 'react';
import Main from './components/Main';
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import GlobalStyle from './GlobalStyle';

function App() {
	const [toDos, setToDos] = useState([]);

	return (
		<Main>
			<GlobalStyle />
			<StyledH3>TODO-LIST</StyledH3>
			<Form toDos={toDos} setToDos={setToDos} />
			<ToDoList toDos={toDos} setToDos={setToDos} />
		</Main>
	);
}

const StyledH3 = styled.h3`
	color: #777;
	font-size: 20px;
	margin-left: 1rem;
	padding: -0.2rem;
	font-weight: 600;
	&:hover {
		color: #333;
		cursor: pointer;
	}
`;

export default App;
