import { AxiosResponse } from 'axios';
import { http } from '../../../config/axios_instances';
import { swal } from '../../../utils';
import {
    IPoliciesResponse,
    IPolicyAttributes,
    IPolicyResponse,
} from './../../../utils/interfaces/insurability';

// Services: POST
const createPolicy = async (data: any): Promise<IPolicyAttributes | string> => {
    try {
        let URI = `/insurabilities`;
        let res: AxiosResponse<IPolicyResponse> = await http.post(URI, data);
        await swal.fire('poliza creada', res.data.message, 'success');
        return res.data.results;
    } catch (error) {
        console.error(error);
        await swal.fire('Error', '', 'error');

        return Promise.reject('Error');
    }
};

const getPolicies = async (): Promise<IPolicyAttributes[] | string> => {
    try {
        let URI = `/insurabilities`;
        let res: AxiosResponse<IPoliciesResponse> = await http.get(URI);
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const getPolicy = async (
    id: string
): Promise<IPolicyAttributes | string> => {
    try {
        let URI = `/insurabilities`;
        let res: AxiosResponse<IPolicyResponse> = await http.get(URI, {
            params: { id },
        });
        return res.data.results;
    } catch (error) {
        return Promise.reject('Error');
    }
};

// Services: PUT
export const updatePolicy = async (data: any, id: number) => {
    try {
        let URI = `/insurabilities`;
        let res: AxiosResponse<IPolicyResponse> = await http.put(URI, data, {
            params: { id },
        });
        await swal.fire('poliza actualizada', res.data.message, 'success');
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const policiesRealEstate = async (real_estate_id: number) => {
    try {
        let URI = `/insurabilities`
        let res: AxiosResponse<IPolicyResponse> = await http.get(URI, {
            params: { real_estate_id },
        });
        return res.data.results;
    } catch (error) {
        return Promise.reject('Error');
    }
}

const services = {
    createPolicy,
    getPolicies,
    getPolicy,
    updatePolicy,
    policiesRealEstate,
};

export default services;
