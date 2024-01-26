import React, { useState } from 'react';
import Main from './components/Main';
import ToDoList from './components/ToDoList';
import Form from './components/Form';

const App = () => {
	const [toDos, setToDos] = useState([]);

	//추가
	const onAddHandler = (currentArr) => setToDos([...toDos, currentArr]);

	//업데이트
	const onUpdateHandler = (updated) => {
		updated.isDone = !updated.isDone;
		setToDos(toDos.map((item) => (item.id === updated.id ? updated : item)));
	};

	return (
		<Main>
			<h1>TODO-LIST</h1>
			<Form toDos={toDos} setToDos={setToDos} onAddHandler={onAddHandler} />
			<ToDoList toDos={toDos} setToDos={setToDos} onUpdateHandler={onUpdateHandler} />
		</Main>
	);
};

export default App;
