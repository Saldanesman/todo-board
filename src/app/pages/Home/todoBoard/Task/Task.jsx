
import './Task.scss';


const Dashboard = (props) => {

	return (
		<div className={'tb-c-task'}>
      <h1 className={'tb-c-task__name'}> {props.taskInfo?.name} </h1>
      <div className={'tb-c-task__info'}>
        <p className={'tb-c-task__info__date'}> Created: {props.taskInfo?.created} </p>
        <p className={'tb-c-task__info__date'}> Deadline: {props.taskInfo?.deadline} </p>
        <div className={'tb-c-task__info__type-and-prio'}> 
          <div className={'tb-c-task__info__type-and-prio__type'}>
            <p className={'tb-c-task__info__type-and-prio__type__title'}> {props.taskInfo?.type} </p>
          </div>
          <div className={'tb-c-task__info__type-and-prio__priority'}>
            <p className={'tb-c-task__info__type-and-prio__priority__title'}> {props.taskInfo?.priority} </p>
          </div>
        </div>
      </div>
    </div>
	);
};

export default Dashboard;
