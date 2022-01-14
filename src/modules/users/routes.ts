import { IRoute } from '../../utils/components/app_router/custom_types';
import CreateUser from './views/CreateUser';
import Users from './views/Users';
import DetailUser from './views/DetailUser';
import EditUser from './views/EditUser';
import { Permit } from '../..';
import PermitsUser from './views/PermitsUser';
import { ListRoles } from './views/roles/ListRoles';
import { CreateRoles } from './views/roles/CreateRoles';
import DetailRoles from './views/roles/DetailRoles';
import { EditRoles } from './views/roles/EditRoles';

export const guards = {
    createRole: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.CREATE_ROLE);
    },
    detailRole: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DETAIL_ROLE);
    },
    editRole: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.UPDATE_ROLE);
    },
    deleteRole: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DELETE_ROLE);
    },
    listRole: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.LIST_ROLE);
    },
    listPermit: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.LIST_PERMIT);
    },
    list: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.LIST_USER);
    },
    create: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.CREATE_ROLE);
    },
    detail: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DETAIL_USER);
    },
    edit: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.UPDATE_USER);
    },
    delete: (props?) => {
        const user = props.user;
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DELETE_USER);
    },
};

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: guards.list,
            path: '/users/',
            template_props: {
                breadcrumbs: [{ name: 'Usuarios' }],
            },
            component: Users,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.create,
            path: '/users/create/',
            template_props: {
                breadcrumbs: [
                    { name: 'Usuario', to: '/users/' },
                    { name: 'Crear' },
                ],
            },
            component: CreateUser,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.detail,
            path: '/users/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Usuario', to: '/users/' },
                    { name: 'Detalle' },
                ],
            },
            component: DetailUser,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.edit,
            path: '/users/edit/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Usuario', to: '/users/' },
                    { name: 'Editar' },
                ],
            },
            component: EditUser,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/users/permits/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Usuario', to: '/users/' },
                    { name: 'Asignar permisos al Usuario' },
                ],
            },
            component: PermitsUser,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.listRole,
            path: '/roles/',
            template_props: {
                breadcrumbs: [{ name: 'Roles' }],
            },
            component: ListRoles,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.createRole,
            path: '/roles/create/',
            template_props: {
                breadcrumbs: [
                    { name: 'Roles', to: '/roles/' },
                    { name: 'Crear un nuevo Rol' },
                ],
            },
            component: CreateRoles,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.detailRole,
            path: '/roles/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Roles', to: '/roles/' },
                    { name: 'ver Rol' },
                ],
            },
            component: DetailRoles,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.editRole,
            path: '/roles/edit/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Roles', to: '/roles/' },
                    { name: 'Editar Rol' },
                ],
            },
            component: EditRoles,
        },
    ];
};

export default get_routes;
