import { AxiosResponse } from 'axios';
import { auth_http } from '../../../../config/axios_instances';
import { swal_success, swal_warning } from '../../../../utils';

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
        console.log('filtros', filters);
        const URI = '/users/list/';
        const res: AxiosResponse<AllUsersResponse> = await auth_http.get(URI, {
            params: {
                with: 'pagination',
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
    if (data.detailsUser) {
        delete data.detailsUser.id;
        delete data.detailsUser.politics;
        delete data.detailsUser.notification;
        delete data.detailsUser.status;
        delete data.detailsUser.audit_trail;
        delete data.detailsUser.str_location;
        if (data.detailsUser.entity_type !== 'P') {
            delete data.detailsUser.dependency;
            delete data.detailsUser.subdependency;
        }
    }
    try {
        const URI = '/users/';
        const res: AxiosResponse<UserResponse> = await auth_http.post(
            URI,
            data
        );
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_user_by_id = async (id?, token?) => {
    try {
        const URI = `/users/`;
        const res: AxiosResponse<UserResponse> = await auth_http.get(URI, {
            params: { ...(id ? { id } : {}) },
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const update_user = async (id, data) => {
    if (data.user) {
        delete data.user.password;
    }
    if (data.detailsUser) {
        delete data.detailsUser.id;
        delete data.detailsUser.politics;
        delete data.detailsUser.notification;
        delete data.detailsUser.status;
        delete data.detailsUser.audit_trail;
        delete data.detailsUser.str_location;
        if (data.detailsUser.entity_type !== 'P') {
            delete data.detailsUser.dependency;
            delete data.detailsUser.subdependency;
        }
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

export const assignRolesAndPermits = async (id, data) => {
    try {
        if (data.permits && data.roles_to_assign) {
            // const r1 = await auth_http.post(
            //     '/roles/assign',
            //     { roles: data.roles_to_assign },
            //     {
            //         params: {
            //             to: id,
            //         },
            //     }
            // );
            // const r2 = await auth_http.post(
            //     '/permits/assign',
            //     { permits: data.permits },
            //     {
            //         params: { to: id },
            //     }
            // );
            await swal_success.fire({
                title: 'Usuario actualizado',
                text: 'Roles y Permisos asignados',
                icon: 'success',
            });
        }
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const delete_user = async (id) => {
    try {
        const URI = `/users/`;
        const res: AxiosResponse<UserResponse> = await auth_http.delete(URI, {
            params: { id },
        });
        return res.data;
    } catch (e) {
        if (e?.response?.status === 400) {
            swal_warning.fire({ text: e.response.data.message, icon: 'error' });
            console.log(e.response.data);
        }
        return Promise.reject('Error');
    }
};
