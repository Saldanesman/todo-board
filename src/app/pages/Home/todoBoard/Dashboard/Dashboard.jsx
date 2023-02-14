import React, { useEffect, useState } from 'react';
import {ReactComponent as Info} from '../../../../../assets/images/info.svg';
import {ReactComponent as Add} from '../../../../../assets/images/add.svg';
import Task from '../Task/Task';
import './Dashboard.scss';
import listMock from './tasksMock';
import DialogTaskCard from '../../../../common/DialogTaskCard/DialogTaskCard';

const Dashboard = () => {

  //leer desde backend la list de tasks

  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [locked, setLocked] = useState([]);
  const [done, setDone] = useState([]);
  const [title, setTitle] = useState('TO DO Board');
  // const [showAddButton, setShowAddButton] = useState(false);
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

	useEffect(() => {
		setTodo(listMock.todo);
    setInProgress(listMock.inProgress);
    setLocked(listMock.locked);
    setDone(listMock.done);
	}, []);

  const toggleTitle = (title) => {
    if (title === 'To do Board') setTitle('Done Board');
    else setTitle('To do Board');
  };

  // const openDialog = () => {
  //   setIsDialogOpen(true);
  // }

	return (
    <>
      <div className={'tb-c-dashboard'}>
        <div className={'tb-c-dashboard__header'}>
          <h1 className={'tb-c-dashboard__header__title'}> {title} </h1>
          <Info className={'tb-c-dashboard__header__info'} />
        </div>
        <div className={'tb-c-dashboard__columns'}>
          <div className={'tb-c-dashboard__columns__column'}>
            <div className={'tb-c-dashboard__columns__column__head'}>
              <h1 className={'tb-c-dashboard__columns__column__head__title'}> To do {todo.length}</h1>
              <button className={'tb-c-dashboard__columns__column__head__add'}>
                <Add className={'tb-c-dashboard__columns__column__head__add__icon'} />
              </button>
            </div>
            <div className={'tb-c-dashboard__columns__column__card'}>
              {todo && todo.map((task) => {
                return <Task key={task.id} taskInfo={task}/>;
              })}
            </div>
          </div>
          <div className={'tb-c-dashboard__columns__column'}>
          <div className={'tb-c-dashboard__columns__column__head'}>
              <h1 className={'tb-c-dashboard__columns__column__head__title'}> In Progress {inProgress.length}</h1>
              <button className={'tb-c-dashboard__columns__column__head__add'}>
                <Add className={'tb-c-dashboard__columns__column__head__add__icon'} />
              </button>
            </div>
            <div className={'tb-c-dashboard__columns__column__card'}>
              {inProgress && inProgress.map((task) => {
                return <Task key={task.id} taskInfo={task}/>;
              })}
            </div>
          </div>
          <div className={'tb-c-dashboard__columns__column'}>
          <div className={'tb-c-dashboard__columns__column__head'}>
              <h1 className={'tb-c-dashboard__columns__column__head__title'}> Locked {locked.length}</h1>
              <button className={'tb-c-dashboard__columns__column__head__add'}>
                <Add className={'tb-c-dashboard__columns__column__head__add__icon'} />
              </button>
            </div>
            <div className={'tb-c-dashboard__columns__column__card'}>
              {locked && locked.map((task) => {
                return <Task key={task.id} taskInfo={task}/>;
              })}
            </div>
          </div>
          <div className={'tb-c-dashboard__columns__column'}>
          <div className={'tb-c-dashboard__columns__column__head'}>
              <h1 className={'tb-c-dashboard__columns__column__head__title'}> Done {done.length}</h1>
              <button className={'tb-c-dashboard__columns__column__head__add'}>
                <Add className={'tb-c-dashboard__columns__column__head__add__icon'} />
              </button>
            </div>
            <div className={'tb-c-dashboard__columns__column__card'}>
              {done && done.map((task) => {
                return <Task key={task.id} taskInfo={task}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
	);
};

export default Dashboard;
