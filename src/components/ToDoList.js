import ToDoItem from './TodoItem';

function ToDoList({ toDos, setToDos }) {
	console.log(toDos);
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

	const workingToDos = toDos.filter((todo) => !todo.isDone);
	const doneToDos = toDos.filter((todo) => todo.isDone);

	return (
		<div>
			<div>
				<h3> Working 📜 </h3>
				<ul>
					{toDos.map((item) => (
						<ToDoItem toDos={workingToDos} key={item.id} onToggleHandler={onToggleHandler} onDeleteHandler={onDeleteHandler} onAddHandler={onAddHandler} />
					))}
				</ul>
			</div>
			<div>
				<h3> Done 🚀 </h3>
				<ul>
					{toDos.map((item) => (
						<ToDoItem toDos={doneToDos} key={item.id} setToDos={setToDos} onToggleHandler={onToggleHandler} onDeleteHandler={onDeleteHandler} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default ToDoList;
