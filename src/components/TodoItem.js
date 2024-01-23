import React from 'react';
import styles from './ToDoItem.module.css';
import '../App.css';

const ToDoItem = ({ todo, onDeleteHandler, onUpdateHandler }) => {
	return (
		<li className={styles.todoLi} key={todo.id}>
			<div>
				<h3 className={styles.title}>{todo.text}</h3>
				<div className={styles.body}>{todo.body}</div>
			</div>
			<div className={styles.deleteDone}>
				<button onClick={() => onDeleteHandler(todo.id)} className={styles.delete}>
					삭제
				</button>
				<button onClick={() => onUpdateHandler(todo)} className={styles.done}>
					{todo.isDone ? '취소' : '완료'}
				</button>
			</div>
		</li>
	);
};

export default ToDoItem;
