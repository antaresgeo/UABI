// import store from "../../config/store";
import { IRoute } from "../../utils/components/app_router/custom_types";
import Policies from "./views/Policies";
import CreateInsurability from './views/CreatePolicy';
import DetailInsurability from './views/DetailPolicies';
import EditPolicy from './views/EditPolicy';




const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/insurabilities/policy',
            breadcrumbs: [{ name: "Polizas" }],
            component: Policies
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/insurability/policy/create/",
            breadcrumbs: [
                { name: "Poliza", to: "/insurabilities/policy" },
                { name: "Crear" },
            ],
            component: CreateInsurability,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/insurability/policy/:id/",
            component: DetailInsurability,
            breadcrumbs: [
                { name: "Poliza", to: "/insurabilities/policy" },
                { name: "Detalle" },
            ],
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/insurability/policy/edit/:id/",
            breadcrumbs: [
                { name: "Poliza", to: "/insurabilities/policy" },
                { name: "Editar" },
            ],
            component: EditPolicy,
        },
    ];
};

export default get_routes;
