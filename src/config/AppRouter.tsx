import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRoute } from '../utils/components/PrivateRoute';

// Views
import MasterTemplate from '../views/MasterTemplate';
import NoMatch from '../views/Errors/NoMatch';
import Auth from './../views/Auth';

const AppRouter = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setIsAuthenticated(true);
		}
		console.log(isAuthenticated);
	}, []);

	return (
		<Router>
			<Switch>
				<Route path='/auth'>
					<Auth />
				</Route>
				<PrivateRoute path='/' isAuthenticated={isAuthenticated} exact>
					<MasterTemplate />
				</PrivateRoute>
				<Route component={NoMatch} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
