import store from "../../config/store";
import { IRoute } from "../../utils/components/app_router/custom_types";
import { Asegurabilidad } from "./views";

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/asegurabilidad/',
            component: Asegurabilidad
        }
    ];
};

export default get_routes;
