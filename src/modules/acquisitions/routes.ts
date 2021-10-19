import { IRoute } from "../../utils/components/app_router/custom_types";
import {
    CreateProject,
    CreateRealEstate,
    DetailRealEstate,
    EditProject,
    EditRealEstate,
    EstateAreas,
    RealEstate,
    DetailProject,
    Projects,
} from "./views";

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/areas/create/",
            breadcrumbs: [
                { name: "Bienes Inmuebles", to: "/acquisitions/real-estates/" },
                { name: "Crear Areas" },
            ],
            component: EstateAreas,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/create/",
            breadcrumbs: [
                { name: "Bienes Inmuebles", to: "/acquisitions/real-estates/" },
                { name: "Crear" },
            ],
            component: CreateRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/edit/:id/",
            breadcrumbs: [
                { name: "Bienes Inmuebles", to: "/acquisitions/real-estates/" },
                { name: "Editar" },
            ],
            component: EditRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/:id/",
            breadcrumbs: [
                { name: "Bienes Inmuebles", to: "/acquisitions/real-estates/" },
                { name: "Detalle" },
            ],
            component: DetailRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/",
            breadcrumbs: [{ name: "Bienes Inmuebles" }],
            component: RealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects/create/",
            breadcrumbs: [
                { name: "Proyectos", to: "/acquisitions/projects/" },
                { name: "Crear" },
            ],
            component: CreateProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects/edit/:id/",
            breadcrumbs: [
                { name: "Proyectos", to: "/acquisitions/projects/" },
                { name: "Editar" },
            ],
            component: EditProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects/:id/",
            breadcrumbs: [
                { name: "Proyectos", to: "/acquisitions/projects/" },
                { name: "Detalle" },
            ],
            component: DetailProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects/",
            breadcrumbs: [{ name: "Proyectos" }],
            component: Projects,
        },
    ];
};

export default get_routes;
