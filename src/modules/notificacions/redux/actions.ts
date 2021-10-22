import types from "./types";
import service from "./service";
import { request_dispatch } from "../../../utils";

// const example = (filters = {}) =>
//     request_dispatch(types.example_type, service.example_service(filters));
const getNotification = (id: string) =>
    request_dispatch(types.notification, service.getNotification(id));

const getNotifications = () =>
    request_dispatch(types.notifications, service.getNotifications({}));
const actions = {
    getNotification,
    getNotifications
    // example
};

export default actions;
