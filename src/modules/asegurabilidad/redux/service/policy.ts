import { AxiosResponse } from 'axios';
import { documents_http, http } from '../../../../config/axios_instances';
import { swal } from '../../../../utils';
import { IPaginable } from '../../../../utils/interfaces';
import {
    IPolicyAttributes,
    IPolicyResponse,
} from '../../../../utils/interfaces';
import { compute_doc_policy } from '../../views/Policies/poliza.utils';
import { create_document } from '../../../../utils/components/DocumentsModal/services';

// Services: POST
export const createPolicy = async (
    data: any
): Promise<IPolicyAttributes | string> => {
    try {
        console.log('service', data);
        let URI = `/insurabilities`;
        const doc: any = await compute_doc_policy(data.insurance_document);
        const create_doc: any = await create_document(doc);
        delete data.insurance_document;
        delete data.registry_numbers;
        const dataFinal = {
            ...data,
            insurance_document_id: create_doc.id,
        };
        console.log('final', dataFinal);
        let res: AxiosResponse<IPolicyResponse> = await http.post(
            URI,
            dataFinal
        );
        await swal.fire('poliza creada', res.data.message, 'success');
        return res.data.results;
    } catch (error) {
        console.error(error);
        console.log('error');
        //await swal.fire('Error', '', 'error');

        return Promise.reject('Error');
    }
};

export const getPolicies = async ({
    pagination,
    page = 1,
    pageSize = 10,
    q = null,
}): Promise<IPaginable<IPolicyAttributes> | string> => {
    try {
        let URI = `/insurabilities`;
        let res: AxiosResponse<IPaginable<IPolicyAttributes>> = await http.get(
            URI,
            {
                params: {
                    page,
                    pageSize,
                    with: pagination,
                    ...(q ? { q } : {}),
                },
            }
        );
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
        //console.log(res.data.results);
        res.data.results.insurance_document = await getDocument(
            res.data.results.insurance_document_id
        );
        //console.log(res.data.results);

        return res.data.results;
    } catch (error) {
        return Promise.reject('Error');
    }
};

const getDocument = async (ids) => {
    try {
        let URI = `/docs/${ids}`;
        let res: AxiosResponse<IPolicyResponse> = await documents_http.get(URI);
        return res.data.results;
    } catch (error) {
        return Promise.reject('Error');
    }
};

// Services: PUT
export const updatePolicy = async (data: any, id: number) => {
    try {
        console.log('servicio', data);
        // Crea un documento nuevo si se cambio el documento
        let new_doc: any = { id: '' };
        if (
            !data.insurance_document.hasOwnProperty('id') &&
            data.insurance_document.hasOwnProperty('pdf')
        ) {
            new_doc = await create_document(data.insurance_document);
            data.insurance_document_id = new_doc.id;
        }

        // guarda las compañias con id y porcentaje
        const companias = [];
        data.insurance_companies.map((company) =>
            companias.push({
                id: company.id,
                percentage_insured: company.percentage_insured,
            })
        );

        // poliza editada para enviar
        const finalData = {
            ...data,
            id: id,
            insurance_broker_id: data.insurance_broker.id,
            insurance_document_id: data.insurance_document_id,
            insurance_companies: companias,
        };
        delete finalData.insurance_document;
        delete finalData.insurance_broker;
        delete finalData.registry_numbers;
        delete finalData.audit_trail;
        delete finalData.status;
        console.log('servicio final', finalData);

        let URI = `/insurabilities`;
        let res: AxiosResponse<IPolicyResponse> = await http.put(
            URI,
            finalData,
            {
                params: { id },
            }
        );
        await swal.fire('poliza actualizada', res.data.message, 'success');
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const realEstatesPolicy = async (policy_id: number) => {
    try {
        let URI = `/insurabilities`;
        let res: AxiosResponse<IPolicyResponse> = await http.get(URI, {
            params: { policy_id },
        });
        return res.data.results;
    } catch (error) {
        return Promise.reject('Error');
    }
};

const services = {
    createPolicy,
    getPolicies,
    getPolicy,
    updatePolicy,
    realEstatesPolicy,
};

export default services;
