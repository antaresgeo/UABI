import { documents_http } from './../../../config/axios_instances';
import { AxiosResponse } from 'axios';

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

export const create_document = async ({
    pdf,
    name,
}: {
    pdf: File;
    name?: string;
}): Promise<Document | string> => {
    try {
        const formData: FormData = new FormData();
        formData.append('pdf', pdf);
        name && formData.append('name', name);
        const URI = `/docs/upload/`;
        const res: AxiosResponse<CreateDocumentResponse> =
            await documents_http.post(URI, formData, {
                headers: { 'content-type': 'multipart/form-data' },
            });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
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

const services = {
    create_document,
    get_all_documents,
};

export default services;
