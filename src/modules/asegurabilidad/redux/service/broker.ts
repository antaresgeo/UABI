import { AxiosResponse } from 'axios';
import { http } from '../../../../config/axios_instances';

export interface AllBrokersResponse {
    message: string;
    results: Broker[];
    page: number;
    count: number;
    next_page?: any;
    previous_page?: any;
    total_results: number;
}

export interface ListBrokersResponse {
    message: string;
    results: Broker[];
}

export interface BrokerResponse {
    message: string;
    results: Broker;
}

export interface Broker {
    id?: number;
    name: string;
    nit: number;
    location_id: string;
    phone: string;
    contact_information: ContactInformation;
    status?: number;
    audit_trail?: any;
}
export interface ContactInformation {
    name: string;
    email: string;
    phone: string;
}

export const get_all_brokers = async (filters?) => {
    try {
        const URI = '/insurance-brokers/';
        const res: AxiosResponse<AllBrokersResponse> = await http.get(URI, {
            params: {
                ...filters,
            },
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_list_brokers = async () => {
    try {
        const URI = '/insurance-brokers/list/';
        const res: AxiosResponse<ListBrokersResponse> = await http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const create_broker = async (data: Broker) => {
    try {
        const URI = '/insurance-brokers/';
        const res: AxiosResponse<BrokerResponse> = await http.post(URI, {
            name: data.name,
            nit: data.nit,
            location_id: data.location_id,
            phone: data.phone,
            contact_information: data.contact_information,
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_broker_by_id = async (id) => {
    try {
        const URI = `/insurance-brokers/${id}/`;
        const res: AxiosResponse<BrokerResponse> = await http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const update_broker = async (id, data) => {
    try {
        const URI = '/insurance-brokers/';
        const res: AxiosResponse<BrokerResponse> = await http.put(
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

export const delete_broker = async (id) => {
    try {
        const URI = `/insurance-brokers/${id}/`;
        const res: AxiosResponse<BrokerResponse> = await http.delete(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};
