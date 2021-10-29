// import store from "../../config/store";
import { IRoute } from '../../utils/components/app_router/custom_types';
import Policies from './views/Policies';
import CreateInsurability from './views/CreatePolicy';
import DetailInsurability from './views/DetailPolicies';
import EditPolicy from './views/EditPolicy';
import { Permit } from '../..';

export const guards = {
    create: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const { permits } = user;
        return permits.includes( Permit.CREATE_PROJECT );
    },

}

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: guards.create,
            path: '/insurabilities/policy',
            template_props: {
                breadcrumbs: [{ name: 'Polizas' }],
            },
            component: Policies,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurability/policy/create/',
            template_props: {
                breadcrumbs: [
                    { name: 'Poliza', to: '/insurabilities/policy' },
                    { name: 'Crear' },
                ],
            },

            component: CreateInsurability,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurability/policy/:id/',
            component: DetailInsurability,
            template_props: {
                breadcrumbs: [
                    { name: 'Poliza', to: '/insurabilities/policy' },
                    { name: 'Detalle' },
                ],
            },
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurability/policy/edit/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Poliza', to: '/insurabilities/policy' },
                    { name: 'Editar' },
                ],
            },
            component: EditPolicy,
        },
    ];
};

export default get_routes;
