import useRoutes from './config/routes';
import Router from './utils/components/app_router';
import Template from './utils/components/template';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import actions from './modules/auth/redux/actions';
import PasswordChangeModal from './modules/auth/views/pass_change_modal';
import { TemplateContext } from './utils/components/template/template_context';
import PercentageModal from './modules/acquisitions/components/percentage_Modal';
import axios from "axios";

function App() {
    const user = useSelector((store: any) => store.auth.user);
    const context = useContext(TemplateContext);
    const dispatch = useDispatch();
    const routes = useRoutes();
    const aux_user = {
        ...user,
        permits: user?.permits?.map((a) => a.name) || [],
        roles: user?.roles?.map((a) => a.name) || [],
    };

    return (
        <>
            <Router routes={routes} template={Template} user={aux_user} />
            <PasswordChangeModal
                update_password={async (password) => {
                    await dispatch(actions.update_password(password));
                }}
                open={context.pass_modal}
                toggle={context.toggle_pass_modal}
            />
            <PercentageModal open={context.percentege} toggle={context.toggle_percentage_modal} />
        </>
    );
}

export default App;
