import { AxiosResponse } from "axios";
import { http } from "../../../config/axios_instances";
import { INotificationtAttributes, INotificationResponse, INotificationsResponse } from './../../../utils/interfaces/notification';

const getNotification = async (
    id: string
): Promise<INotificationtAttributes | string> => {
    try {
        let URI = `/notification`;
        let res: AxiosResponse<INotificationResponse> = await http.get(URI, {
            params: { id },
        });

        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

const getNotifications = async ({
    page = 1,
    pageSize = 10,
    q = null,
}): Promise<INotificationtAttributes[] | string> => {
    try {
        let URI = `/notification/list`;
        let res: AxiosResponse<INotificationsResponse> = await http.get(URI, {
            params: {
                page,
                pageSize,
                ...(q ? { q } : {}),
            },
        });
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};


const services = {
    getNotification,
    getNotifications
    
};

export default services;
