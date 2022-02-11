import { AxiosResponse } from 'axios';
import { http } from '../../../../config/axios_instances';
import moment from 'moment';

export interface AllCompaniesResponse {
    message: string;
    results: Company[];
    page: number;
    count: number;
    next_page?: any;
    previous_page?: any;
    total_results: number;
}

export interface ListCompaniesResponse {
    message: string;
    results: Company[];
}

export interface CompanyResponse {
    message: string;
    results: Company;
}

export interface Company {
    id?: number;
    name: string;
    nit: number;
    location_id: string;
    phone: string;
    status?: number;
    audit_trail?: any;
}

export const get_all_contracts = async (filters?) => {
    try {
        // console.log(filters);
        const URI = '/contracts/';
        const res: AxiosResponse<AllCompaniesResponse> = await http.get(URI, {
            params: {
                ...filters,
            },
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_list_contracts = async () => {
    try {
        const URI = '/contracts';
        const res: AxiosResponse<ListCompaniesResponse> = await http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const create_contract = async (data: any) => {
    try {
        const URI = '/contracts';
        const res: AxiosResponse<any> = await http.post(
            URI,
            data
        );
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_contract = async (id) => {
    try {
        const URI = `contracts`;
        const res: AxiosResponse<any> = await http.get(URI,
            {
                params: { id }
            }
        );

        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_contracts_realestates = async (active_code) => {
    try {
        const URI = `/contracts`;
        const res: AxiosResponse<any> = await http.get(URI,
            {
                params: {
                    active_code,

                }
            }
        );
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};
export const get_contract_realestate = async (active_code, status) => {
    try {
        const URI = `/contracts`;
        const res: AxiosResponse<any> = await http.get(URI,
            {
                params: {
                    active_code,
                    status

                }
            }
        );
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_contracts = async () => {
    try {
        const URI = `/contracts`;
        const res: AxiosResponse<any> = await http.get(URI,
            {
                params: { with: 'pagination' }
            }
        );
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

const final_data = (data) => {
    const aux_data = {
        ...data,
    }
    aux_data.decree_date = new Date(moment(aux_data.decree_date).format('YYYY/MM/DD')).getTime();
    aux_data.finish_date = new Date(moment(aux_data.finish_date).format('YYYY/MM/DD')).getTime();
    aux_data.minutes_date = new Date(moment(aux_data.minutes_date).format('YYYY/MM/DD')).getTime();
    aux_data.subscription_date = new Date(moment(aux_data.subscription_date).format('YYYY/MM/DD')).getTime();
    aux_data.secretary = {
        id: aux_data.secretary.id
    }
    return aux_data;

}

export const update_contract = async (id, data) => {
    const aux_data = final_data(data)
    try {
        const URI = '/contracts';
        const res: AxiosResponse<any> = await http.put(
            URI,
            aux_data,
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
export const delete_contract = async (id) => {
    try {
        const URI = '/contracts/';
        const res: AxiosResponse<any> = await http.put(
            URI,
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
