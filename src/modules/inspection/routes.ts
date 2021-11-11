// import store from '../../config/store';
import { IRoute } from '../../utils/components/app_router/custom_types';
import { CreateOccupation } from './views/CreateOccupation';
import CreateInspectionPhysical from './views/CreateInspectionPhysical';
import CreateUpgrade from './views/CreateUpgrade';
import Prueba from './views/Prueba';
/**
 *
 *
 * @return {*}  {IRoute[]}
 */
import ListInspection from './views/ListInspection';




const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inspection/occupation/',
            component: CreateOccupation,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inspection/physical/',
            component: CreateInspectionPhysical,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inspection/upgrade/',
            component: CreateUpgrade,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inspection',
            component: ListInspection,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/inspection/',
            component: Prueba,
        },
    ];
};



export default get_routes;
