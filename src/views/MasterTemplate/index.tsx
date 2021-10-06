import {
	Route,
	BrowserRouter as Router,
	Switch,
	useRouteMatch,
	Redirect,
} from 'react-router-dom';

import Registros from './pages/Registros';
import SideBar from '../../utils/components/SideBar';
import TopBar from './../../utils/components/TopBar/index';
import Home from './pages/Home';

function MasterTemplate() {
	let { path, url } = useRouteMatch();

	return (
		<div className='d-flex'>
			<SideBar />
			<div className='content w-100'>
				<TopBar />
				<Home />

				{/* <Router>
					<Switch>
						<Route exact path={path}>
							{/* <Redirect to={{ pathname: `${path}/registros` }} /> 
						</Route>
						<Route path={`${path}/registros`}>
						</Route>
					</Switch>
				</Router> */}
			</div>
		</div>
	);
}

export default MasterTemplate;
