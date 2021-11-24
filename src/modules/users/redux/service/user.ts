import { AxiosResponse } from 'axios';
import { auth_http } from '../../../../config/axios_instances';
import { Audit_trail } from '../../../../utils/components/DocumentsModal/services';

export interface AllUsersResponse {
    message: string;
    results: User[];
    page: number;
    count: number;
    next_page?: any;
    previous_page?: any;
    total_results: number;
}

export interface ListUsersResponse {
    message: string;
    results: User[];
}

export interface UserResponse {
    message: string;
    results: User;
}

export interface User {
    detailsUser: DetailsUser;
    roles: {
        id: number;
        name: string;
    }[];
    permits: {
        id: number;
        name: string;
    }[];
    key?: string;
}

export interface DetailsUser {
    id: number;
    society_type: string;
    entity_type: string;
    politics: boolean;
    notification: boolean;
    id_type: string;
    id_number: string;
    names: {
        firstName: string;
        lastName: string;
    };
    surnames: {
        firstSurname: string;
        lastSurname: string;
    };
    email: string;
    location: string;
    cellphone_number: number;
    phone_number: number;
    gender: string;
    status?: string;
    audit_trail?: any;
}

export const get_all_users = async (filters?) => {
    try {
        const URI = '/users/';
        const res: AxiosResponse<AllUsersResponse> = await auth_http.get(URI, {
            params: {
                ...filters,
            },
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_list_users = async () => {
    try {
        const URI = '/users/list/';
        const res: AxiosResponse<ListUsersResponse> = await auth_http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const create_user = async (data) => {
    delete data.user.password;
    delete data.detailsUser.id;
    delete data.detailsUser.politics;
    delete data.detailsUser.notification;
    delete data.detailsUser.status;
    delete data.detailsUser.audit_trail;
    delete data.detailsUser.str_location;
    if(data.detailsUser.entity_type !== 'P'){
        delete data.detailsUser.dependency;
        delete data.detailsUser.subdependency;
    }
    try {
        const URI = '/users/';
        const res: AxiosResponse<UserResponse> = await auth_http.post(URI, data);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_user_by_id = async (id) => {
    try {
        const URI = `/users/`;
        const res: AxiosResponse<UserResponse> = await auth_http.get(URI, {
            params: { id },
        });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const update_user = async (id, data) => {
    delete data.user.password;
    delete data.detailsUser.id;
    delete data.detailsUser.politics;
    delete data.detailsUser.notification;
    delete data.detailsUser.status;
    delete data.detailsUser.audit_trail;
    if(data.detailsUser.entity_type !== 'P'){
        delete data.detailsUser.dependency;
        delete data.detailsUser.subdependency;
    }

    try {
        const URI = '/users/';
        const res: AxiosResponse<UserResponse> = await auth_http.put(
            URI,
            data,
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

export const delete_user = async (id) => {
    try {
        const URI = `/users/${id}/`;
        const res: AxiosResponse<UserResponse> = await auth_http.delete(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};
