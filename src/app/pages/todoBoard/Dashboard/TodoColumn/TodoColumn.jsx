import Task from '../../Task/Task';
import './TodoColumn.scss';


const TodoColumn = () => {
	const list = ['A', 'B'];

	return (
		<div className={'tb-c-todo-column'}>
			<div className={'tb-c-todo-column__title'}> To do </div>
			<div className={'tb-c-todo-column__tasks'}>
				{list.map((task) => {
					return <Task key={task.id}/>;
				})}
			</div>
		</div>
	);
};

export default TodoColumn;
