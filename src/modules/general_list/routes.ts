// import store from '../../config/store';
import { Permit } from '../..';
import { IRoute } from '../../utils/components/app_router/custom_types';
import Dependecies from './views/Dependency';
import CreateDependency from './views/Dependency/CreateDependency';
import DetailDependency from './views/Dependency/DetailDependency';
import EditDependency from './views/Dependency/EditDependency';
import CreateTipology from './views/Tipology/CreateTipology';
import DetailTipology from './views/Tipology/DetailTipology';
import EditTipology from './views/Tipology/EditTipology';
import Tipologies from './views/Tipology/index';

export const guards = {
    createInsuranceBroker: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.CREATE_INSURANCE_BROKER);
    },
    detailInsuranceBroker: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DETAIL_INSURANCE_BROKER);
    },
    editInsuranceBroker: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.UPDATE_INSURANCE_BROKER);
    },
    deleteInsuranceBroker: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DELETE_INSURANCE_BROKER);
    },
    listInsuranceBroker: (props?) => {
        const user = props.user;
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
            can_access: true,
            path: '/general_list/tipology/',
            template_props: {
                breadcrumbs: [{ name: 'Tipologias' }],
            },
            component: Tipologies,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/general_list/tipology/create/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Tipologias',
                        to: '/general_list/tipology/',
                    },
                    { name: 'Crear' },
                ],
            },

            component: CreateTipology,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/general_list/tipology/:id/',
            component: DetailTipology,
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Tipologias',
                        to: '/general_list/tipology/',
                    },
                    { name: 'Detalle' },
                ],
            },
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/general_list/tipology/edit/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Tipologias',
                        to: '/general_list/tipology/',
                    },
                    { name: 'Editar' },
                ],
            },
            component: EditTipology,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/general_list/dependency/',
            template_props: {
                breadcrumbs: [{ name: 'Dependencias' }],
            },
            component: Dependecies,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/general_list/dependency/create/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Dependencias',
                        to: '/general_list/dependency/',
                    },
                    { name: 'Crear' },
                ],
            },

            component: CreateDependency,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/general_list/dependency/:id/',
            component: DetailDependency,
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Dependencias',
                        to: '/general_list/dependency/',
                    },
                    { name: 'Detalle' },
                ],
            },
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/general_list/dependency/edit/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Dependencias',
                        to: '/general_list/dependency/',
                    },
                    { name: 'Editar' },
                ],
            },
            component: EditDependency,
        },
    ];
};

export default get_routes;
