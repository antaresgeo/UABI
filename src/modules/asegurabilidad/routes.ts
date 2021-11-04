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

import InsuranceBrokers from './views/InsuranceBroker';
import EditInsuranceBroker from './views/InsuranceBroker/EditInsuranceCompany';
import DetailInsuranceBroker from './views/InsuranceBroker/DetailInsuranceCompany';
import CreateInsuranceBroker from './views/InsuranceBroker/CreateInsuranceCompany';

export const guards = {
    createPolicy: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.CREATE_POLICY);
    },
    detailPolicy: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DETAIL_POLICY);
    },
    editPolicy: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.UPDATE_POLICY);
    },
    listPolicy: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.LIST_POLICY);
    },
    createInsuranceCompany: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.CREATE_INSURANCE_COMPANY);
    },
    detailInsuranceCompany: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DETAIL_INSURANCE_COMPANY);
    },
    editInsuranceCompany: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.UPDATE_INSURANCE_COMPANY);
    },
    listInsuranceCompany: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.LIST_INSURANCE_COMPANY);
    },
    createInsuranceBroker: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.CREATE_INSURANCE_BROKER);
    },
    detailInsuranceBroker: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DETAIL_INSURANCE_BROKER);
    },
    editInsuranceBroker: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.UPDATE_INSURANCE_BROKER);
    },
    listInsuranceBroker: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.LIST_INSURANCE_BROKER);
    },
};
const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: guards.listPolicy,
            path: '/insurabilities/policy',
            template_props: {
                breadcrumbs: [{ name: 'Registro de Pólizas' }],
            },
            component: Policies,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.createPolicy,
            path: '/insurabilities/policy/create/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Registro de Pólizas',
                        to: '/insurabilities/policy',
                    },
                    { name: 'Crear Nueva Póliza' },
                ],
            },

            component: CreateInsurability,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.detailPolicy,
            path: '/insurabilities/policy/:id/',
            component: DetailInsurability,
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Registro de Pólizas',
                        to: '/insurabilities/policy',
                    },
                    { name: 'Ver Póliza' },
                ],
            },
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.editPolicy,
            path: '/insurabilities/policy/edit/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Registro de Pólizas',
                        to: '/insurabilities/policy',
                    },
                    { name: 'Editar Póliza' },
                ],
            },
            component: EditPolicy,
        },

        {
            exact: true,
            is_private: true,
            can_access: guards.detailInsuranceCompany,
            path: '/insurabilities/company/',
            template_props: {
                breadcrumbs: [{ name: 'Empresas Aseguradoras' }],
            },
            component: InsuranceCompanies,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.createInsuranceCompany,
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
            can_access: guards.detailInsuranceCompany,
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
            can_access: guards.editInsuranceCompany,
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
            can_access: guards.listInsuranceBroker,
            path: '/insurabilities/broker/',
            template_props: {
                breadcrumbs: [{ name: 'Empresas Aseguradoras' }],
            },
            component: InsuranceBrokers,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.createInsuranceBroker,
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
            can_access: guards.detailInsuranceBroker,
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
            can_access: guards.editInsuranceBroker,
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
