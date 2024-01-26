import ToDoItem from './TodoItem';

function ToDoList({ todo, setToDos }) {
	console.log(!todo);
	if (!todo) {
		return null;
	}

	//추가
	const onAddHandler = (currentArr) => setToDos([...todo, currentArr]);

	//업데이트
	const onToggleHandler = (updated) => {
		updated.isDone = !updated.isDone;
		setToDos(todo.map((item) => (item.id === updated.id ? updated : item)));
	};

	const onDeleteHandler = (id) => {
		const confirmDelete = window.confirm('삭제하시겠습니까?');
		if (!confirmDelete) return;
		setToDos(todo.filter((item) => item.id !== id));
	};

	const workingToDos = todo.filter((item) => !item.isDone);
	const doneToDos = todo.filter((item) => item.isDone);
	console.log(workingToDos, doneToDos);

	return (
		<div>
			<div>
				<h3> Working 📜 </h3>
				<ul>
					{workingToDos.map((item) => (
						<ToDoItem key={item.id} onToggleHandler={onToggleHandler} onDeleteHandler={onDeleteHandler} onAddHandler={onAddHandler} />
					))}
				</ul>
			</div>
			<div>
				<h3> Done 🚀 </h3>
				<ul>
					{doneToDos.map((item) => (
						<ToDoItem key={item.id} setToDos={setToDos} onToggleHandler={onToggleHandler} onDeleteHandler={onDeleteHandler} />
					))}
				</ul>{' '}
			</div>
		</div>
	);
}

export default ToDoList;
