// import store from '../../config/store';
import { IRoute } from '../../utils/components/app_router/custom_types';
import InventoryRecordList from './views/InventoryRecordList';
import { InventoryRecordDetail } from './views/InventoryRecordDetail';

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inventoryrecordlist',
            template_props: {
                breadcrumbs: [{ name: 'Registros de inventario' }],
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
                        name: 'Bienes Inmuebles',
                        to: '/acquisitions/real-estates/',
                    },
                    { name: 'Ver bien inmueble' },
                ],
            },
            component: InventoryRecordDetail,
        },
    ];
};

export default get_routes;
