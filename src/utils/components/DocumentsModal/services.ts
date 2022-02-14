import { documents_http } from './../../../config/axios_instances';
import { AxiosResponse } from 'axios';
import { formatDate } from '../../index';

export interface CreateDocumentResponse {
    message: string;
    results: Document;
}
export interface Audit_trail {
    created_by: string;
    created_on: string;
    updated_by?: any;
    updated_on?: any;
    updated_values?: any;
}
export interface Document {
    id: string;
    name: string;
    original_name: string;
    path: string;
    status: number;
    audit_trail: Audit_trail;
}

export interface GetAllDocumentsResponse {
    message: string;
    results: Document[];
}

interface CreateDocumentProps {
    pdf: File;
    name?: string;
    type?: string;
}

export const create_document = async (file: CreateDocumentProps, id: number): Promise<Document | string> => {
    const {
        pdf,
        name,
        type,
    } = file;

    try {
        const formData: FormData = new FormData();
        formData.append('pdf', pdf);
        name && formData.append('name', name);
        type && formData.append('type', type);
        if (id) {
            formData.append('real_estate_id', `${id}`);
        }
        const URI = `/docs/upload/?type=pdf&from=sabi`;
        const res: AxiosResponse<CreateDocumentResponse> =
            await documents_http.post(URI, formData, {
                headers: { 'content-type': 'multipart/form-data' },
            });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_documents_by_ids = async (ids) => {
    try {
        let URI_documents = '/docs/real-estates/';
        let res: any = await documents_http.get(URI_documents, {
            params: {
                ids,
            },
        });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error get_documents_by_ids');
    }
};

export const download_document = async (doc_id, name) => {
    try {
        if (doc_id) {
            let URI = `/docs/download/${doc_id}`;
            let res: any = await download(name, documents_http.get(URI));
            console.log(res);
        }
    } catch (e) {
        return Promise.reject('Error download_document');
    }
};

const download = async (filename, service) => {
    return service.then((response) => {
        if (response) {
            createDownload(filename, new Blob([response.data]));
        }
    });
};

export const createDownload = (filename: string, file: File | Blob) => {
    const url = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    const [name, _type] = filename.split('.');
    link.setAttribute('download', `${name}_${formatDate(new Date())}.${_type}`);
    document.body.appendChild(link);
    console.log(link);
    link.click();
};

export const get_all_documents = async (): Promise<Document[] | string> => {
    try {
        const URI = `/docs/`;
        const res: AxiosResponse<GetAllDocumentsResponse> =
            await documents_http.get(URI);
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_all_documents_by_bi = async (
    re_id
): Promise<Document[] | string> => {
    try {
        const URI = `/docs/`;
        const res: AxiosResponse<GetAllDocumentsResponse> =
            await documents_http.get(URI, {
                params: {
                    re_id,
                },
            });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const delete_document = async (id) => {
    try {
        const URI = `/docs/${id}/`;
        const res: any = await documents_http.delete(URI);
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};

const services = {
    create_document,
    get_all_documents,
};

export default services;
