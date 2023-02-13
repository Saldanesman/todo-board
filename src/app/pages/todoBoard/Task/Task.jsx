
import './Task.scss';


const Dashboard = () => {

  const task = {
    name: 'My Name',
    description: 'This is my first example of the task card',
    type: 'university',
    priority: 5,
    created: '5-08-2020',
    deadline: '15-03-2023',
    column: 'todo',
  };

	return (
		<div className={'tb-c-task'}>
      <h1 className={'tb-c-task__name'}> {task.name} </h1>
      <div className={'tb-c-task__info'}>
        <p className={'tb-c-task__info__date'}> Created: {task.created} </p>
        <p className={'tb-c-task__info__date'}> Deadline: {task.deadline} </p>
        <div className={'tb-c-task__info__type-and-prio'}> 
          <div className={'tb-c-task__info__type-and-prio__type'}>
            <p className={'tb-c-task__info__type-and-prio__type__title'}> {task.type} </p>
          </div>
          <div className={'tb-c-task__info__type-and-prio__priority'}>
            <p className={'tb-c-task__info__type-and-prio__priority__title'}> {task.priority} </p>
          </div>
        </div>
      </div>
    </div>
	);
};

export default Dashboard;
