
import TodoColumn from './TodoColumn/TodoColumn';
import InProgressColumn from './InProgressColumn/InProgressColumn';
import LockedColumn from './LockedColumn/LockedColumn';
import DoneColumn from './DoneColumn/DoneColumn';
import './Dashboard.scss';


const Dashboard = () => {
	return (
		<div className={'tb-c-dashboard'}>
      <div className={'tb-c-dashboard__columns'}>
        <div className={'tb-c-dashboard__columns__column'}>
          <TodoColumn />
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <InProgressColumn />
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <LockedColumn />
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <DoneColumn />
        </div>
      </div>
    </div>
	);
};

export default Dashboard;
