import './NoMatch.scss';


const NoMatch = () => {
  return (
    <div className={'tb-c-error-404'}>
      <h1 className={'tb-c-error-404__title'}>PAGE 404</h1>
      <a className={'tb-c-error-404__link'} href={'/'}>Go to board</a>
    </div>
  );
};

export default NoMatch;