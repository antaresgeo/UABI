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
            path: '/inventoryrecordlist',
            template_props: {
                breadcrumbs: [{ name: 'Administración de inventario' }],
            },
            component: InventoryRecordList
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inventoryrecord/real-estates/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Administración de inventario',
                        to: '/inventoryrecordlist',
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
            path: '/inventoryrecord/real-estates/edit/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Administración de inventario',
                        to: '/inventoryrecordlist',
                    },
                    { name: 'Editar bien inmueble' },
                ],
            },
            component: InventoryRecordEdit,
        },
    ];
};

export default get_routes;
