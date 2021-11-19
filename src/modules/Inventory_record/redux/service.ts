import { AxiosResponse } from 'axios';
import { http } from '../../../config/axios_instances';
export interface AllRegistrationsResponse {
    message: string;
    results: registration[];
    page: number;
    count: number;
    next_page?: any;
    previous_page?: any;
    total_results: number;
}
export interface ListRegistrationsResponse {
    message: string;
    results: registration[];
}

export interface RegistrationResponse {
    message: string;
    results: registration;
}

export interface registration {
    id?: number;
    status?: number;
    audit_trail?: any;
}

export const get_all_registrations = async (filters?) => {
    try {
        const URI = '/inventoryRecord/';
        const res: AxiosResponse<AllRegistrationsResponse> = await http.get(URI, {
            params: {
                ...filters,
            },
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_list_registration = async () => {
    try {
        const URI = '/inventoryRecord/list/';
        const res: AxiosResponse<ListRegistrationsResponse> = await http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const create_registration = async (data: registration) => {
    try {
        const URI = '/inventoryRecord/';
        const res: AxiosResponse<RegistrationResponse> = await http.post(URI,data);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_registration_by_id = async (id) => {
    try {
        const URI = `/inventoryRecord/${id}/`;
        const res: AxiosResponse<RegistrationResponse> = await http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const update_registration = async (id, data) => {
    try {
        const URI = '/inventoryRecord/';
        const res: AxiosResponse<RegistrationResponse> = await http.put(
            URI,data,
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

export const delete_registration = async (id) => {
    try {
        const URI = `/inventoryRecord/${id}/`;
        const res: AxiosResponse<RegistrationResponse> = await http.delete(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};




const services = {
    get_all_registrations,
    get_list_registration,
    create_registration,
    get_registration_by_id,
    update_registration,
    delete_registration

};

export default services;
