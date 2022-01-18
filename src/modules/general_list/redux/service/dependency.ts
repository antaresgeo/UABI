import { AxiosResponse } from 'axios';
import { http } from '../../../../config/axios_instances';

export interface AllDependenciesResponse {
    message: string;
    results: Dependency[];
    page: number;
    count: number;
    next_page?: any;
    previous_page?: any;
    total_results: number;
}

export interface ListDependenciesResponse {
    message: string;
    results: Dependency[];
}

export interface DependencyResponse {
    message: string;
    results: Dependency;
}

export interface Dependency {
    id?: number;
    dependency: string;
    subdependency?: string;
    management_center: number;
    cost_center?: number;
    subdependencies?: any[];
    status?: number;
    audit_trail?: any;
}


export const get_all_dependencies = async (filters?) => {
    try {
        const URI = '/dependencies';
        const res: AxiosResponse<AllDependenciesResponse> = await http.get(URI, {
            params: {
                ...filters,
            },
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_list_dependencies = async () => {
    try {
        const URI = '/dependencies/list/';
        const res: AxiosResponse<ListDependenciesResponse> = await http.get(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const create_dependency = async (data: Dependency) => {
    try {
        const URI = '/dependencies';
        // delete data.id
        const res: AxiosResponse<DependencyResponse> = await http.post(URI, {
            ...data,
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_dependency_by_id = async (id) => {
    try {
        const URI = `/dependencies`;
        const res: AxiosResponse<DependencyResponse> = await http.get(URI,{
            params: {
                id,
            },
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const update_dependency = async (id, data) => {
    try {
        const URI = '/dependencies';
        const res: AxiosResponse<DependencyResponse> = await http.put(
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

export const delete_dependency = async (id) => {
    try {
        const URI = `/dependencies/${id}/`;
        const res: AxiosResponse<DependencyResponse> = await http.delete(URI);
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};
