import { IRoute } from '../../utils/components/app_router/custom_types';
import { Login, SignUp } from './views';

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: false,
            path: '/auth/login/',
            component: Login,
        },
        {
            exact: true,
            is_private: false,
            path: '/auth/signup/',
            component: SignUp,
        },
    ];
};

export default get_routes;
