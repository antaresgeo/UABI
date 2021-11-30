// import store from '../../config/store';
import { IRoute } from '../../utils/components/app_router/custom_types';
import InspectionCreate from './views/inspection/InspectionCreate';

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
            path: '/inspection/:real_estate_id/create/',
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
            component: InspectionCreate,
        },
    ];
};

export default get_routes;
