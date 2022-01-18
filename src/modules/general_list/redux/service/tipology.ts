import { AxiosResponse } from 'axios';
import { http } from '../../../../config/axios_instances';

export interface AllTipologiesResponse {
    message: string;
    results: Tipology[];
    page: number;
    count: number;
    next_page?: any;
    previous_page?: any;
    total_results: number;
}

export interface ListTipologiesResponse {
    message: string;
    results: Tipology[];
}

export interface TipologyResponse {
    message: string;
    results: Tipology;
}

export interface Tipology {
    id?: number;
    tipology: string;
    accounting_account: number;
    status?: number;
    audit_trail?: any;
}


export const get_all_tipologies = async (filters?) => {
    try {
        const URI = '/tipologies';
        const res: AxiosResponse<AllTipologiesResponse> = await http.get(URI, {
            params: {
                ...filters,
            },
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_list_tipologies = async () => {
    try {
        const URI = '/tipologies/list/';
        const res: AxiosResponse<ListTipologiesResponse> = await http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const create_tipology = async (data: Tipology) => {
    try {
        const URI = '/tipologies/';
        const res: AxiosResponse<TipologyResponse> = await http.post(URI, {
            data,
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_tipology_by_id = async (id) => {
    try {
        const URI = `/tipologies/`;
        const res: AxiosResponse<TipologyResponse> = await http.get(URI,{
            params: {
                id,
            },
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const update_tipology = async (id, data) => {
    try {
        const URI = '/tipologies/';
        const res: AxiosResponse<TipologyResponse> = await http.put(
            URI,
            {
                data
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

export const delete_tipology = async (id) => {
    try {
        const URI = `/tipologies/${id}/`;
        const res: AxiosResponse<TipologyResponse> = await http.delete(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};
