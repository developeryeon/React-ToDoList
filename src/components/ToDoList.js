import ToDoItem from './TodoItem';

function ToDoList({ toDos, setToDos, onUpdateHandler, onAddHandler }) {
	const onDeleteHandler = (id) => {
		const confirmDelete = window.confirm('삭제하시겠습니까?');
		if (!confirmDelete) return;
		setToDos(toDos.filter((item) => item.id !== id));
	};

	return (
		<div>
			<div>
				<h3> Working 📜 </h3>
				<ul>
					{toDos
						.filter((item) => item.isDone === false)
						.map((item) => (
							<ToDoItem todo={item} key={item.id} onUpdateHandler={onUpdateHandler} onDeleteHandler={onDeleteHandler} onAddHandler={onAddHandler} />
						))}
				</ul>
			</div>
			<div>
				<h3> Done 🚀 </h3>
				<ul>
					{toDos
						.filter((item) => item.isDone === true)
						.map((item) => (
							<ToDoItem todo={item} key={item.id} setToDos={setToDos} onUpdateHandler={onUpdateHandler} onDeleteHandler={onDeleteHandler} />
						))}
				</ul>
			</div>
		</div>
	);
}

export default ToDoList;
