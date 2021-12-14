// import store from '../../config/store';
import { IRoute } from '../../utils/components/app_router/custom_types';
import InspectionCreate from './views/inspection/InspectionCreate';

import ListInspection from './views/inspection';
import Scheduler from "./views/scheduler";

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
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inspection/scheduler/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Inspecciones',
                        to: '/inspection/',
                    },
                    {
                        name: 'Calendario',
                    },
                ],
            },
            component: Scheduler,
        },
    ];
};

export default get_routes;
