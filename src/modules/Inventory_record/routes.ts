// import store from '../../config/store';
import { IRoute } from '../../utils/components/app_router/custom_types';
import InventoryRecordList from './views/InventoryRecordList';
import { InventoryRecordDetail } from './views/InventoryRecordDetail';
import InventoryRecordEdit from './views/InventoryRecordEdit';

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inventory-record-list',
            template_props: {
                breadcrumbs: [{ name: 'Administración de inventario' }],
            },
            component: InventoryRecordList,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inventory-record/real-estates/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Administración de inventario',
                        to: '/inventory-record-list',
                    },
                    { name: 'Ver bien inmueble' },
                ],
            },
            component: InventoryRecordDetail,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inventory-record/real-estates/edit/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Administración de inventario',
                        to: '/inventory-record-list',
                    },
                    { name: 'Editar bien inmueble' },
                ],
            },
            component: InventoryRecordEdit,
        },
    ];
};

export default get_routes;
