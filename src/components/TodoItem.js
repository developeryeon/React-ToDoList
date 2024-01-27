const ToDoItem = ({ todoItem, onDeleteHandler, onToggleHandler }) => {
	return (
		<li key={todoItem.id}>
			<div>
				<h3>{todoItem.text}</h3>
				<div>{todoItem.body}</div>
			</div>
			<div>
				<button onClick={() => onDeleteHandler(todoItem.id)}>삭제</button>
				<button onClick={() => onToggleHandler(todoItem)}>{todoItem.isDone ? '취소' : '완료'}</button>
			</div>
		</li>
	);
};

export default ToDoItem;
