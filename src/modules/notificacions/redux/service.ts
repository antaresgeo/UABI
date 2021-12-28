import { AxiosResponse } from 'axios';
import { notification_http } from '../../../config/axios_instances';

export interface AllNotificationsResponse {
    message: string;
    results: Notification[];
    page: number;
    count: number;
    next_page?: any;
    ous_page?: any;
    total_results: number;
}

export interface ListNotificationsResponse {
    message: string;
    results: Notification[];
}

export interface NotificationResponse {
    message: string;
    results: Notification;
}

export interface Notification {
    id: number;
    title: string;
    description: string;
    priority: number;
    action: string;
    received: boolean;
    readed: boolean;
    to: number;
    from: number;
    status?: number;
    audit_trail?: any;
    status_info?: any;
    key?: string;
}

const format_response = (data) => {
    if (Array.isArray(data) && data?.length > 0) {
        return data.map((d) => {
            d.key = `nt-${d.id}`;
            return d;
        });
    }
    return [];
};

export const get_all_notifications = async (filters?) => {
    try {
        const URI = '/notifications/';
        const res: AxiosResponse<AllNotificationsResponse> =
            await notification_http.get(URI, {
                params: {
                    ...filters,
                    with: 'pagination',
                    last: 10,
                },
            });
        res.data.results = format_response(res?.data?.results);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_list_notifications = async (to?) => {
    try {
        const URI = '/notifications/';
        const res: AxiosResponse<ListNotificationsResponse> =
            await notification_http.get(URI, {
                params: {
                    ...(to ? { to } : {}),
                    last: 10,
                },
            });
        res.data.results = format_response(res?.data?.results);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_notification_by_id = async (id) => {
    try {
        const URI = `/notifications/`;
        const res: AxiosResponse<NotificationResponse> =
            await notification_http.get(URI, {
                params: {
                    id,
                },
            });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const create_notification = async (
    title: string,
    description: string,
    action: string,
    priority: number,
    from: number,
    _to?: number,
    toRole?: number
) => {
    try {
        const URI = '/notifications/';
        const res: AxiosResponse<NotificationResponse> =
            await notification_http.post(URI, {
                title,
                description,
                action,
                priority,
                _to,
                ...(_to ? { _to } : {}),
                ...(toRole ? { toRole } : {}),
            });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const update_notification = async (id, data) => {
    try {
        const URI = '/notifications/';
        const res: AxiosResponse<NotificationResponse> =
            await notification_http.put(
                URI,
                { ...data },
                {
                    params: {
                        id,
                    },
                }
            );
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const delete_notification = async (id) => {
    try {
        const URI = `/notifications/${id}/`;
        const res: AxiosResponse<NotificationResponse> =
            await notification_http.delete(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

const services = {
    get_all_notifications,
    get_list_notifications,
    get_notification_by_id,
    create_notification,
    update_notification,
    delete_notification,
};

export default services;
