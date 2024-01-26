const ToDoItem = ({ todo, onDeleteHandler, onToggleHandler }) => {
	return (
		<li key={todo.id}>
			<div>
				<h3>{todo.text}</h3>
				<div>{todo.body}</div>
			</div>
			<div>
				<button onClick={() => onDeleteHandler(todo.id)}>삭제</button>
				<button onClick={() => onToggleHandler(todo)}>{todo.isDone ? '취소' : '완료'}</button>
			</div>
		</li>
	);
};

export default ToDoItem;
