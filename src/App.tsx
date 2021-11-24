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
        if (token) {
            dispatch(actions.get_user(token));
        }
    }, []);

    const routes = useRoutes();
    return (
        <>
            <Router routes={routes} template={Template} user={user} />
        </>
    );
}

export default App;
