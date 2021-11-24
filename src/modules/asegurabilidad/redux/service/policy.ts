import { AxiosResponse } from 'axios';
import { documents_http, http } from '../../../../config/axios_instances';
import { swal } from '../../../../utils';
import { IPaginable } from './../../../../utils/interfaces/index';
import {
    IPoliciesResponse,
    IPolicyAttributes,
    IPolicyResponse,
} from '../../../../utils/interfaces/insurability';
import { compute_doc_policy } from '../../views/Policies/poliza.utils';
import { create_document } from './../../../../utils/components/DocumentsModal/services';
import { Pagination } from './../../../../custom_types';

// Services: POST
export const createPolicy = async (data: any): Promise<IPolicyAttributes | string> => {
    try {
        console.log('service',data);
        // let URI = `/insurabilities`;
        // const doc: any = await compute_doc_policy(data.insurance_document);
        // const create_doc: any = await create_document(doc);
        // delete data.insurance_document;
        // delete data.registry_numbers;
        // const dataFinal = {
        //     ...data,
        //     insurance_document_id: create_doc.id
        // }
        // let res: AxiosResponse<IPolicyResponse> = await http.post(URI, dataFinal);
        // await swal.fire('poliza creada', res.data.message, 'success');
        // return res.data.results;
    } catch (error) {
        console.error(error);
        console.log('error')
        //await swal.fire('Error', '', 'error');

        return Promise.reject('Error');
    }
};

export const getPolicies = async ({
    pagination,
    page = 1,
    pageSize = 10,
    q = null,
}):  Promise<IPaginable<IPolicyAttributes> | string> => {
    try {
        let URI = `/insurabilities`;
        let res: AxiosResponse<IPaginable<IPolicyAttributes>> = await http.get(URI,{
            params: {
                page,
                pageSize,
                with: pagination,
                ...(q ? { q } : {}),
            },
        });
        return res.data;
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
        console.log(res.data.results);
        res.data.results.insurance_document = await getDocument(
            res.data.results.insurance_document_id
        );
        console.log(res.data.results);

        return res.data.results;
    } catch (error) {
        return Promise.reject('Error');
    }
};

const getDocument = async (id_document) => {
    try {
        let URI = `/docs/`;
        let res: AxiosResponse<IPolicyResponse> = await documents_http.get(URI, {
            params: { id_document },
        });
        return res.data.results;
    } catch (error) {
        return Promise.reject('Error');
    }
}

// Services: PUT
 export const updatePolicy = async (data: any, id: number) => {
    try {
        console.log('servicio',data)
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
