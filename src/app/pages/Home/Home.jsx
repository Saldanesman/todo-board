import Header from '../../layout/Header/Header';
import Dashboard from './todoBoard/Dashboard/Dashboard';
import './Home.scss';


const Home = () => {

	return (
		<div className={'tb-c-home'}>
      <Header />
      <div className={'tb-c-home__board'}>
        <Dashboard />
      </div>
    </div>
	);
};

export default Home;
