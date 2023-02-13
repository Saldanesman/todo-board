import './TodoColumn.scss';


const TodoColumn = () => {
	const list = ['A', 'B', 'C'];

	return (
		<div className={'tb-c-todo-column'}>
			<div className={'tb-c-todo-column__title'}> To do </div>
			<div className={'tb-c-todo-column__tasks'}>
				{list.map((element) => element)}
			</div>
		</div>
	);
};

export default TodoColumn;
