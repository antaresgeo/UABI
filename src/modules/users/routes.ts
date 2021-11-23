import { IRoute } from '../../utils/components/app_router/custom_types';
import CreateUser from './views/CreateUser';
import Users from './views/Users';
import DetailUser from './views/DetailUser';
import EditUser from './views/EditUser';
import { Role } from '../..';
import PermitsUser from './views/PermitsUser';
import { ListRoles } from './views/roles/ListRoles';
import { CreateRoles } from './views/roles/CreateRoles';
import DetailRoles from './views/roles/DetailRoles';
import { EditRoles } from './views/roles/EditRoles';

export const guards = {
    view: (props?) => {
        const user = props.user
        if (!user) return false;
        return user.roles.includes(Role.ADMINISTRATOR);
    },
    create: (props?) => {
        console.log(props)
        const user = props.user
        if (!user) return false;
        return user.roles.includes(Role.ADMINISTRATOR);
    },
    detail: (props?) => {
        const user = props.user
        if (!user) return false;
        return user.roles.includes(Role.ADMINISTRATOR);
        // return false;
    },
    edit: (props?) => {
        const user = props.user
        if (!user) return false;
        return user.roles.includes(Role.ADMINISTRATOR);
    },
    delete: (props?) => {
        const user = props.user
        if (!user) return false;
        return user.roles.includes(Role.ADMINISTRATOR);
    },
};

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: guards.view,
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
            can_access: true,
            path: '/roles/',
            template_props: {
                breadcrumbs: [{ name: 'Roles' }],
            },
            component: ListRoles,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
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
            can_access: true,
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
            can_access: true,
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
