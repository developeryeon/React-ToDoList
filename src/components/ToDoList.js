import ToDoItem from './TodoItem';
import styled from 'styled-components';

function ToDoList({ toDos, setToDos }) {
	if (!toDos) {
		return null;
	}

	//추가
	const onAddHandler = (currentArr) => setToDos([...toDos, currentArr]);

	//업데이트
	const onToggleHandler = (updated) => {
		updated.isDone = !updated.isDone;
		setToDos(toDos.map((item) => (item.id === updated.id ? updated : item)));
	};

	const onDeleteHandler = (id) => {
		const confirmDelete = window.confirm('삭제하시겠습니까?');
		if (!confirmDelete) return;
		setToDos(toDos.filter((item) => item.id !== id));
	};

	const workingToDos = toDos.filter((item) => !item.isDone);
	const doneToDos = toDos.filter((item) => item.isDone);

	return (
		<ToDoListWrap>
			<WorkingList>
				<h3> Working 📜 </h3>
				<ListMap>
					{workingToDos.map((item) => (
						<ToDoItem key={item.id} todoItem={item} onToggleHandler={onToggleHandler} onDeleteHandler={onDeleteHandler} onAddHandler={onAddHandler} />
					))}
				</ListMap>
			</WorkingList>
			<DoneList>
				<h3> Done 🚀 </h3>
				<ListMap>
					{doneToDos.map((item) => (
						<ToDoItem key={item.id} todoItem={item} setToDos={setToDos} onToggleHandler={onToggleHandler} onDeleteHandler={onDeleteHandler} />
					))}
				</ListMap>
			</DoneList>
		</ToDoListWrap>
	);
}

const ToDoListWrap = styled.section`
	display: flex;
	flex-direction: column;

	margin: 10px auto 10px auto;
`;

const WorkingList = styled.div`
	margin-bottom: 1.5rem;
`;

const ListMap = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
`;

const DoneList = styled.div`
	margin-top: 1rem;
`;

export default ToDoList;
