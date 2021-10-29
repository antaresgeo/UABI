import { IRoute } from "../../utils/components/app_router/custom_types";
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


} from "./views";



export const create_realEstate = () => {
    /*const user = */
    //console.log(store.getState().users);
    //store.getState().users.user.value[0].id_rol
    //console.log( user.hasOwnProperty("") );
}
const get_routes = (): IRoute[] => {
    create_realEstate();
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/real-estates/create/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Bienes Inmuebles',
                        to: '/acquisitions/real-estates/',
                    },
                    { name: 'Crear' },
                ],
            },
            component: CreateRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/real-estates/edit/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Bienes Inmuebles',
                        to: '/acquisitions/real-estates/',
                    },
                    { name: 'Editar' },
                ],
            },
            component: EditRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/real-estates/:id/',
            template_props: {
                breadcrumbs: [
                    {
                        name: 'Bienes Inmuebles',
                        to: '/acquisitions/real-estates/',
                    },
                    { name: 'Detalle' },
                ],
            },
            component: DetailRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/real-estates/',
            template_props: {
                breadcrumbs: [{ name: 'Bienes Inmuebles' }],
            },
            component: RealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/projects/create/',
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Crear' },
                ],
            },
            component: CreateProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/projects/edit/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Editar' },
                ],
            },
            component: EditProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/acquisitions/projects/:id/',
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Detalle' },
                ],
            },
            component: DetailProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
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
            path: "/acquisitions/registers/",
            template_props: {
                breadcrumbs: [{ name: "Registros" }],
            },
            component: Registers
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects/englobar/:id/",
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Englobar Proyecto' },
                ],
            },
            component: EnglobeProject
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects/desenglobar/:id/",
            template_props: {
                breadcrumbs: [
                    { name: 'Proyectos', to: '/acquisitions/projects/' },
                    { name: 'Desenglobar proyecto' },
                ],
            },
            component: DesenglobeProject
        },
    ];
};

export default get_routes;
