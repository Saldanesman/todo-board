import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home';



const NoMatch = React.lazy(() => import('../pages/NoMatch/NoMatch'));

const Content = () => {
	const location = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			<Route path={'/'} element={<Home />} />
			<Route
				path={'*'}
				element={
					<React.Suspense fallback={<div>Loading...</div>}>
						<NoMatch />
					</React.Suspense>
				}
			/>
		</Routes>
	);
};

export default Content;
