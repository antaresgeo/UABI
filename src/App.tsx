import useRoutes from './config/routes';
import Router from './utils/components/app_router';
import Template from './utils/components/template';
import { IRealEstateAttributes } from './utils/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import actions from './modules/auth/redux/actions';
import { useHistory } from 'react-router-dom';
function App() {
    const user = useSelector((store: any) => store.auth.user);
    const dispatch = useDispatch();
    const token: string = localStorage.getItem('_tk_');
    const routes = useRoutes();
    const history = useHistory();
    // console.log(history);
    const aux_user = {
        ...user,
        permits: user?.permits.map((a) => a.name) || [],
        roles: user?.roles.map((a) => a.name) || [],
    }
    const show = token? !!(token && user): true;

    useEffect(() => {
        if (token && !user) {
            dispatch(actions.get_user(token));
        }
    }, []);

    return <>
        {show &&  <Router routes={routes} template={Template} user={aux_user}/>}
    </>;
}

export default App;
