import { useEffect, useState } from 'react';
import Task from '../Task/Task';
import './Dashboard.scss';
import listMock from './tasksMock';

const Dashboard = () => {

  //leer desde backend la list de tasks

  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [locked, setLocked] = useState([]);
  const [done, setDone] = useState([]);

	useEffect(() => {
		setTodo(listMock.todo);
    setInProgress(listMock.inProgress);
    setLocked(listMock.locked);
    setDone(listMock.done);
	}, []);

	return (
		<div className={'tb-c-dashboard'}>
      <div className={'tb-c-dashboard__columns'}>
        <div className={'tb-c-dashboard__columns__column'}>
          <h1 className={'tb-c-dashboard__columns__column__title'}> To do {todo.length}</h1>
          <div className={'tb-c-dashboard__columns__column__card'}>
            {todo && todo.map((task) => {
              return <Task key={task.id} taskInfo={task}/>;
            })}
          </div>
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <h1 className={'tb-c-dashboard__columns__column__title'}> In Progress {inProgress.length}</h1>
          <div className={'tb-c-dashboard__columns__column__card'}>
            {inProgress && inProgress.map((task) => {
              return <Task key={task.id} taskInfo={task}/>;
            })}
          </div>
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <h1 className={'tb-c-dashboard__columns__column__title'}> Locked {locked.length}</h1>
          <div className={'tb-c-dashboard__columns__column__card'}>
            {locked && locked.map((task) => {
              return <Task key={task.id} taskInfo={task}/>;
            })}
          </div>
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <h1 className={'tb-c-dashboard__columns__column__title'}> Done {done.length}</h1>
          <div className={'tb-c-dashboard__columns__column__card'}>
            {done && done.map((task) => {
              return <Task key={task.id} taskInfo={task}/>;
            })}
          </div>
        </div>
      </div>
    </div>
	);
};

export default Dashboard;
