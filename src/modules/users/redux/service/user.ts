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
        res.data = {
            ...res.data,
            results: res.data.results.map((a: any) => {
                a.id = a.id + 1;
                return a;
            }),
        };
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

export const create_user = async (data: User) => {
    try {
        const URI = '/users/';
        const res: AxiosResponse<UserResponse> = await auth_http.post(URI, {});
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
    try {
        const URI = '/users/';
        const res: AxiosResponse<UserResponse> = await auth_http.put(
            URI,
            {
                name: data.name,
                nit: data.nit,
                location_id: data.location_id,
                phone: data.phone,
                contact_information: data.contact_information,
            },
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
