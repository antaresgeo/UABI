import store from "../../config/store";
import { IRoute } from "../../utils/components/app_router/custom_types";
import ListNotification from './views/ListNotification';
import DetailNotification from './views/DetailNotification';

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: '/notification/',
            breadcrumbs: [{ name: "Notificaciones" }],
            component: ListNotification
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/notification/:id/",
            component: DetailNotification,
            breadcrumbs: [
                { name: "Notificaciones", to: "/notification" }
            ],
        },
    ];
};

export default get_routes;
