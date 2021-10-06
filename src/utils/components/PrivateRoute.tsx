import { Component, createElement } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';

// import { authAtom } from '_state';

export { PrivateRoute };

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
	const routeComponent = (props: any) =>
		isAuthenticated ? (
			createElement(component, props)
		) : (
			<Redirect to={{ pathname: '/auth' }} />
		);
	return <Route {...rest} render={routeComponent} />;
};

// function PrivateRoute({ component, ...rest }: props) {
// const isAuthenticated = localStorage.getItem('token');
// 	// const auth = useRecoilValue(authAtom);
// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) => {
// 				if (!auth) {
// 					// not logged in so redirect to login page with the return url
// 					return (
// 						<Redirect
// 							to={{ pathname: '/auth', state: { from: props.location } }}
// 						/>
// 					);
// 				}

// 				// authorized so return component
// 				return <Component {...props} />;
// 			}}
// 		/>
// 	);
// }
