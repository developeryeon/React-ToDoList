import ToDoItem from './TodoItem';
import styles from './ToDoList.module.css';
import '../App.css';

function ToDoList({ toDos, setToDos, onUpdateHandler, onAddHandler }) {
	// if (!toDos) {
	// 	return null;
	// }

	const onDeleteHandler = (id) => {
		const deletedAsk = window.confirm('삭제하시겠습니까?');
		if (!deletedAsk) return;
		setToDos(toDos.filter((item) => item.id !== id));
	};

	return (
		<div className={styles.WrapToDoList}>
			<div className={styles.todoState}>
				<h3 className={styles.working}> Working 📜 </h3>
				<ul className={styles.TodoUl}>
					{toDos
						.filter((item) => item.isDone === false)
						.map((item) => (
							<ToDoItem todo={item} key={item.id} onUpdateHandler={onUpdateHandler} onDeleteHandler={onDeleteHandler} onAddHandler={onAddHandler} />
						))}
				</ul>
			</div>
			<div className={styles.todoState}>
				<h3 className={styles.working}> Done 🚀 </h3>
				<ul className={styles.TodoUl}>
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

// const moveToDos = (toDos) => {
// 	const todoList = toDos.filter((item) => item.isDone === false);
// 	const doneList = toDos.filter((item) => item.isDone === true);
// 	return { todoList, doneList };
// };

/* <Form setToDos={setToDos} toDos={toDos} />
			<List toDos={toDos} setToDos={setToDos} /> */

/*
			{toDos.map((item) => {
						return item.isDone ? <ToDoItem todo={item} key={item.id} setToDos={setToDos} onUpdateHandler={onUpdateHandler} onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler} /> : '';
					})} */
