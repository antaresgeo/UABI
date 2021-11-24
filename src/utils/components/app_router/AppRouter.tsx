import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouteWithSubRoutes';
import { IAppRouter } from './custom_types';

const AppRouter: React.FC<IAppRouter> = ({ routes, defaultRedirect, privateRedirect, lazy, template, user }) => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route, i) => {
                    if (route.routes) route.exact = false;
                    return (
                        <Route
                            key={`route_global_${i}`}
                            defaultRedirect={defaultRedirect}
                            privateRedirect={privateRedirect}
                            {...route}
                            lazy={lazy}
                            template={template}
                            user={user}
                        />
                    );
                })}
            </Switch>
        </BrowserRouter>
    );
};

AppRouter.defaultProps = {
    defaultRedirect: '/',
    privateRedirect: '/login/',
    lazy: false,
};

export default AppRouter;
