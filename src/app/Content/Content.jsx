import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../pages/todoBoard/Dashboard/Dashboard';



const NoMatch = React.lazy(() => import('../pages/NoMatch/NoMatch'));

const Content = () => {
	const location = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			<Route path={'/'} element={<Dashboard />} />
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
