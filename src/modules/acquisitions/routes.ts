import { IRoute } from '../../utils/components/app_router/custom_types';
import Registers from './views/Registers/Registers';
// import store from './../../config/store';
import EnglobeProject from './views/Projects/EnglobeProject';
import DesenglobeProject from './views/Projects/DesenglobeProject';

import {
    CreateProject,
    CreateRealEstate,
    DetailRealEstate,
    EditProject,
    EditRealEstate,
    // EstateAreas,
    RealEstate,
    DetailProject,
    Projects,
} from './views';
import { Permit } from '../..';

export const guards = {
    createProject: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.CREATE_POLICY);
    },
    detailProject: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const { permits } = user;
        return permits.includes(Permit.DETAIL_PROJECT);
    },
    editProject: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.UPDATE_PROJECT);
    },
    listProject: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.LIST_PROJECT);
    },
    createRealEstate: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.CREATE_REALESTATE);
    },
    detailRealEstate: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.DETAIL_REALESTATE);
    },
    editRealEstate: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.UPDATE_REALESTATE);
    },
    listRealEstate: (props?) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return false;
        const { permits } = user;
        return permits.includes(Permit.LIST_REALESTATE);
    },
};

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: guards.createRealEstate,
            path: '/acquisitions/real-estates/create/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Bienes Inmuebles',
                        to: '/acquisitions/real-estates/',
                    },
                    { name: 'Crear bien inmueble' },
                ],
            },
            component: CreateRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.editRealEstate,
            path: '/acquisitions/real-estates/edit/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Bienes Inmuebles',
                        to: '/acquisitions/real-estates/',
                    },
                    { name: 'Editar bien inmueble' },
                ],
            },
            component: EditRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.detailRealEstate,
            path: '/acquisitions/real-estates/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Bienes Inmuebles',
                        to: '/acquisitions/real-estates/',
                    },
                    { name: 'Ver bien inmueble' },
                ],
            },
            component: DetailRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.listRealEstate,
            path: '/acquisitions/real-estates/',
            template_props: {
                breadcrumbs: [{ name: 'Bienes Inmuebles' }],
            },
            component: RealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.createProject,
            path: '/acquisitions/projects/create/',
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Crear proyecto' },
                ],
            },
            component: CreateProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.editProject,
            path: '/acquisitions/projects/edit/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Editar proyecto' },
                ],
            },
            component: EditProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.detailProject,
            path: '/acquisitions/projects/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Ver proyecto' },
                ],
            },
            component: DetailProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: guards.listProject,
            path: '/acquisitions/projects/',
            template_props: {
                breadcrumbs: [{ name: 'Proyectos' }],
            },
            component: Projects,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/registers/',
            template_props: {
                breadcrumbs: [{ name: 'Registros' }],
            },
            component: Registers,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/projects/englobar/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Englobar Proyecto' },
                ],
            },
            component: EnglobeProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/projects/desenglobar/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Desenglobar proyecto' },
                ],
            },
            component: DesenglobeProject,
        },
    ];
};

export default get_routes;
