import useRoutes from './config/routes';
import Router from './utils/components/app_router';
import Template from './utils/components/template';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import actions from './modules/auth/redux/actions';
import PasswordChangeModal from './modules/auth/views/pass_change_modal';
import { TemplateContext } from './utils/components/template/template_context';
function App() {
    const user = useSelector((store: any) => store.auth.user);
    const context = useContext(TemplateContext);
    const dispatch = useDispatch();
    const token: string = localStorage.getItem('_tk_');
    const routes = useRoutes();
    const aux_user = {
        ...user,
        permits: user?.permits?.map((a) => a.name) || [],
        roles: user?.roles?.map((a) => a.name) || [],
    };
    const show = token ? !!(token && user) : true;

    useEffect(() => {
        if (token && !user) {
            dispatch(actions.get_user(token));
        }
    }, []);

    return (
        <>
            {show && <Router routes={routes} template={Template} user={aux_user} />}
            <PasswordChangeModal
                update_password={async () => {}}
                open={context.pass_modal}
                toggle={context.toggle_pass_modal}
            />
        </>
    );
}

export default App;
