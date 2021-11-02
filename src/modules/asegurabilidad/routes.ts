// import store from "../../config/store";
import { IRoute } from '../../utils/components/app_router/custom_types';
import { Permit } from '../..';
import Policies from './views/Policies/Policies';
import CreateInsurability from './views/Policies/CreatePolicy';
import DetailInsurability from './views/Policies/DetailPolicies';
import EditPolicy from './views/Policies/EditPolicy';

import InsuranceCompanies from './views/InsuranceCompany';
import CreateInsuranceCompany from './views/InsuranceCompany/CreateInsuranceCompany';
import DetailInsuranceCompany from './views/InsuranceCompany/DetailInsuranceCompany';
import EditInsuranceCompany from './views/InsuranceCompany/EditInsuranceCompany';

import InsuranceBrokers from "./views/InsuranceBroker";
import EditInsuranceBroker from "./views/InsuranceBroker/EditInsuranceCompany";
import DetailInsuranceBroker from "./views/InsuranceBroker/DetailInsuranceCompany";
import CreateInsuranceBroker from "./views/InsuranceBroker/CreateInsuranceCompany";

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
            path: '/insurabilities/policy/create/',
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
            path: '/insurabilities/policy/:id/',
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
            path: '/insurabilities/policy/edit/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Poliza', to: '/insurabilities/policy' },
                    { name: 'Editar' },
                ],
            },
            component: EditPolicy,
        },

        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurabilities/company/',
            template_props: {
                breadcrumbs: [{ name: 'Empresas Aseguradoras' }],
            },
            component: InsuranceCompanies,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurabilities/company/create/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Empresas Aseguradoras',
                        to: '/insurabilities/company/',
                    },
                    { name: 'Crear' },
                ],
            },

            component: CreateInsuranceCompany,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurabilities/company/:id/',
            component: DetailInsuranceCompany,
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Empresas Aseguradoras',
                        to: '/insurabilities/company/',
                    },
                    { name: 'Detalle' },
                ],
            },
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurabilities/company/edit/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Empresas Aseguradoras',
                        to: '/insurabilities/company/',
                    },
                    { name: 'Editar' },
                ],
            },
            component: EditInsuranceCompany,
        },

        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurabilities/broker/',
            template_props: {
                breadcrumbs: [{ name: 'Empresas Aseguradoras' }],
            },
            component: InsuranceBrokers,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurabilities/broker/create/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Empresas Aseguradoras',
                        to: '/insurabilities/broker/',
                    },
                    { name: 'Crear' },
                ],
            },

            component: CreateInsuranceBroker,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurabilities/broker/:id/',
            component: DetailInsuranceBroker,
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Empresas Aseguradoras',
                        to: '/insurabilities/broker/',
                    },
                    { name: 'Detalle' },
                ],
            },
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurabilities/broker/edit/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Empresas Aseguradoras',
                        to: '/insurabilities/company/',
                    },
                    { name: 'Editar' },
                ],
            },
            component: EditInsuranceBroker,
        },
    ];
};

export default get_routes;
