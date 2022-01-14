import { AxiosResponse } from 'axios';
import { http } from '../../../../config/axios_instances';

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

export const get_all_companies = async (filters?) => {
    try {
        const URI = '/insurance-companies/';
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

export const get_list_companies = async () => {
    try {
        const URI = '/insurance-companies/list/';
        const res: AxiosResponse<ListCompaniesResponse> = await http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const create_company = async (data: Company) => {
    try {
        const URI = '/insurance-companies/';
        const res: AxiosResponse<CompanyResponse> = await http.post(URI, {
            name: data.name,
            nit: data.nit,
            location_id: data.location_id,
            phone: data.phone + "",
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_company_by_id = async (id) => {
    try {
        const URI = `/insurance-companies/${id}/`;
        const res: AxiosResponse<CompanyResponse> = await http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const update_company = async (id, data: Company) => {
    try {
        const URI = '/insurance-companies/';
        const res: AxiosResponse<CompanyResponse> = await http.put(
            URI,
            {
                name: data.name,
                nit: data.nit,
                location_id: data.location_id,
                phone: data.phone,
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

export const delete_company = async (id) => {
    try {
        const URI = `/insurance-companies/${id}/`;
        const res: AxiosResponse<CompanyResponse> = await http.patch(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};
