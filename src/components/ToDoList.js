import ToDoItem from './TodoItem';

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
		<div>
			<div>
				<h3> Working 📜 </h3>
				<ul>
					{workingToDos.map((item) => (
						<ToDoItem key={item.id} todoItem={item} onToggleHandler={onToggleHandler} onDeleteHandler={onDeleteHandler} onAddHandler={onAddHandler} />
					))}
				</ul>
			</div>
			<div>
				<h3> Done 🚀 </h3>
				<ul>
					{doneToDos.map((item) => (
						<ToDoItem key={item.id} todoItem={item} setToDos={setToDos} onToggleHandler={onToggleHandler} onDeleteHandler={onDeleteHandler} />
					))}
				</ul>{' '}
			</div>
		</div>
	);
}

export default ToDoList;
