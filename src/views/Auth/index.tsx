import {
	Route,
	BrowserRouter as Router,
	Switch,
	useRouteMatch,
	Redirect,
} from 'react-router-dom';
import SignIn from './components/SignIn';

const Auth = () => {
	let { path, url } = useRouteMatch();
	return (
		<Router>
			<Switch>
				<Route exact path={path}>
					<Redirect to={{ pathname: `${path}/signin` }} />
				</Route>
				<Route path={`${path}/signin`}>
					<SignIn />
				</Route>
			</Switch>
		</Router>
	);
};

export default Auth;
