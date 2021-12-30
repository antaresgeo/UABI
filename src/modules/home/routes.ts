// import store from "../../config/store";
import { IRoute } from '../../utils/components/app_router/custom_types';
import { Home } from './views';
import { clearObjectNulls } from '../../utils';

export const guards = {
    general: (props?) => {
        return !!props.user.detailsUser;
    },
};

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: guards.general,
            path: '/',
            component: Home,
            template_props: {
                show_breadcrumbs: false,
            },
        },
    ];
};

export default get_routes;
