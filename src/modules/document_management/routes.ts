// import store from '../../config/store';
import { IRoute } from '../../utils/components/app_router/custom_types';
import Master_formats from './views/Master_formats';
import Electronic_file_list from './views/Electronic_file_list';
import Electronic_file from './views/Electronic_file';

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/document-management/electronic_file/view/',
            template_props: {
                breadcrumbs: [
                    { name: 'Expediente Electrónico', to: '/document-management/electronic_file/list' },
                    { name: 'Documentos Asociados' },
                ],
            },
            component: Electronic_file,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/document-management/master_formats/',
            component: Master_formats,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/document-management/electronic_file/list',
            template_props: {
                breadcrumbs: [
                    { name: 'Expediente Electrónico' },
                ],
            },
            component: Electronic_file_list,
        },
    ];
};

export default get_routes;