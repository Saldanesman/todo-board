
import Searcher from '../../common/Searcher/Sercher';
import './Header.scss';


const Header = () => {

	return (
		<div className={'tb-c-header'}>
      <div className={'tb-c-header__logo'}>HEADER</div>
      <div className={'tb-c-header__options'}>
        <div className={'tb-c-header__options__searcher'}>
          <Searcher />
        </div>
        <div className={'tb-c-header__options__boards-toggle'}>
          BackBoard
        </div>
        <div className={'tb-c-header__options__my-profile'}>
          Me
        </div>
      </div>
    </div>
	);
};

export default Header;
