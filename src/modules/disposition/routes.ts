// import store from '../../config/store';
import { IRoute } from '../../utils/components/app_router/custom_types';
import { DetailDisposition } from './views/DetailDisposition';
import { EditDisposition } from './views/EditDisposition';
import { ListDisposition } from './views/ListDisposition';
import CreateContract from './views/Contracts/CreateContract';
import CreatePrecontractual from './views/Pre-contractual/CreatePrecontractual';

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/disposition/list/',
            template_props: {
                breadcrumbs: [{ name: 'Disposición' }],
            },
            component: ListDisposition,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/disposition/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Disposición', to: '/disposition/list/' },
                    { name: 'Tipo disposición' },
                ],
            },
            component: DetailDisposition,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/disposition/edit/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Disposición', to: '/disposition/list/' },
                    { name: 'Tipo disposición' },
                ],
            },
            component: EditDisposition,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/disposition/precontractual/create/',
            template_props: {
                breadcrumbs: [
                    { name: 'Disposición', to: '/disposition/list/' },
                    { name: 'Tipo disposición', to: '/disposition/edit/:id/' },
                    { name: 'Etapa Precontractual' },
                ],
            },
            component: CreatePrecontractual,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/disposition/contract/create/',
            template_props: {
                breadcrumbs: [
                    { name: 'Disposición', to: '/disposition/list/' },
                    { name: 'Tipo disposición', to: '/disposition/edit/:id/' },
                    { name: 'Crear Contrato' },
                ],
            },
            component: CreateContract,
        },
    ];
};

export default get_routes;
