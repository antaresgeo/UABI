import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import Route from './RouteWithSubRoutes';
import { IAppRouter } from './custom_types';

const AppRouter: React.FC<IAppRouter> = ({
    test,
    routes,
    defaultRedirect,
    privateRedirect,
    lazy,
    template,
    user,
    show,
}) => {
    return (
        <HashRouter>
            <Switch>
                {routes.map((route, i) => {
                    if (route.routes) route.exact = false;
                    return (
                        <Route
                            key={`route_global_${i}`}
                            defaultRedirect={defaultRedirect}
                            privateRedirect={privateRedirect}
                            lazy={lazy}
                            template={template}
                            user={user}
                            test={test}
                            {...route}
                        />
                    );
                })}
            </Switch>
        </HashRouter>
    );
};

AppRouter.defaultProps = {
    defaultRedirect: '/',
    privateRedirect: '/auth/login/',
    lazy: false,
    test: false,
    show: true,
};

export default AppRouter;
