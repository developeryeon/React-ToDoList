import styled from 'styled-components';

const ToDoItem = ({ todoItem, onDeleteHandler, onToggleHandler }) => {
	return (
		<ListWrap key={todoItem.id}>
			<ListItem>
				<ListText>{todoItem.text}</ListText>
				<ListBody>{todoItem.body}</ListBody>
			</ListItem>
			<ButtonSet>
				<DeleteBtn onClick={() => onDeleteHandler(todoItem.id)}>삭제</DeleteBtn>
				<CancleBtn onClick={() => onToggleHandler(todoItem)}>{todoItem.isDone ? '취소' : '완료'}</CancleBtn>
			</ButtonSet>
		</ListWrap>
	);
};

export default ToDoItem;

const ListWrap = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 250px;
	min-height: 160px;
	gap: 12px;
	padding: 1.7rem 2rem;
	background-color: #f5f5f5;
	border: 2px solid #c0c0c0;
	border-radius: 15px;
	margin: 10px;
`;

const ListItem = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	width: 150px;
`;

const ListText = styled.div`
	font-size: 17px;
	margin-top: -35px;
	margin-left: -25px;
	width: 100px;
	height: 20px;
	font-weight: bold;
	word-break: break-all;
	overflow: hidden;
`;

const ListBody = styled.div`
	flex-grow: 1;
	font-size: 15px;
	overflow-wrap: break-word;
	width: 100px;
	height: 50px;
`;

const ButtonSet = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 30px;
`;

const DeleteBtn = styled.button`
	color: #ff3366;
	background-color: #fff;
	border: 1px solid #ff3366;
	border-radius: 9px;
	margin-right: 5px;
	&:hover {
		background-color: #ff3366;
		color: #fff;
		cursor: pointer;
		transition: 0.3s;
	}
`;

const CancleBtn = styled.button`
	color: #6699ff;
	border: 1px solid #3399ff;
	background-color: #fff;
	border-radius: 9px;
	&:hover {
		background-color: #3399ff;
		color: #fff;
		cursor: pointer;
		transition: 0.3s;
	}
`;
