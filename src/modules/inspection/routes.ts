// import store from '../../config/store';
import { IRoute } from '../../utils/components/app_router/custom_types';
import Prueba from './views/inspection/Prueba';

import ListInspection from './views/inspection';

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inspection/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Inspecciones',
                    },
                ],
            },
            component: ListInspection,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inspection/create/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Inspecciones',
                        to: '/inspection/',
                    },
                    {
                        name: 'Crear',
                    },
                ],
            },
            component: Prueba,
        },
    ];
};

export default get_routes;
