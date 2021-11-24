import useRoutes from './config/routes';
import Router from './utils/components/app_router';
import Template from './utils/components/template';
import { IRealEstateAttributes } from './utils/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import actions from './modules/auth/redux/actions';
function App() {
    const user = useSelector((store: any) => store.auth.user);
    const dispatch = useDispatch();
    const token: string = localStorage.getItem('_tk_');

    useEffect(() => {
        if (token && !user) {
            dispatch(actions.get_user(token));
        }
    }, []);

    const routes = useRoutes();
    const aux_user = {
        ...user,
        permits: user?.permits.map((a) => a.name) || [],
        roles: user?.roles.map((a) => a.name) || [],
    }
    return <Router routes={routes} template={Template} user={aux_user} />;
}

export default App;
