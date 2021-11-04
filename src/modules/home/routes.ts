// import store from "../../config/store";
import { IRoute } from '../../utils/components/app_router/custom_types';
import { Home } from './views';
import { Permit } from '../../index';

export const guards = {
    general: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        return true;
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
        // {
        //     exact: true,
        //     is_private: true,
        //     can_access: true,
        //     path: "/location/",
        //     component: Location,
        // },
    ];
};

export default get_routes;
