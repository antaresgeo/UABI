export interface INotificationtAttributes {
    id?: string | number;
    title: string;
    description: string;
    path: string;
    status: number;
}

export interface INotificationsResponse {
    results: INotificationtAttributes[];
    message: string;
}
export interface INotificationResponse {
    results?: INotificationtAttributes;
    message: string;
}
