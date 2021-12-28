import types from './types';
import service from './service';
import { request_dispatch } from '../../../utils';

const get_notification_by_id = (id: number) =>
    request_dispatch(
        types.get_notification,
        service.get_notification_by_id(id)
    );

const get_all_notifications = (filters?) =>
    request_dispatch(
        types.get_all_notifications,
        service.get_all_notifications(filters)
    );

const get_list_notifications = (id?) =>
    request_dispatch(
        types.get_list_notifications,
        service.get_list_notifications(id)
    );

const actions = {
    get_notification_by_id,
    get_all_notifications,
    get_list_notifications
};

export default actions;
