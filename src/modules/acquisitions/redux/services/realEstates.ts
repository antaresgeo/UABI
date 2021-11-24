import { AxiosResponse } from 'axios';
import { getAddressById, insertAddress } from '.';
import { http, documents_http } from '../../../../config/axios_instances';
import { formatDate, swal } from '../../../../utils';

import {
    AdquisitionsItf,
    IPaginable,
    IRealEstateAttributes,
    IRealEstateResponse,
} from '../../../../utils/interfaces';
import {
    compute_docs,
    upload_documents,
} from '../../views/RealEstate/realEstate.utils';
import { get_documents_by_ids } from '../../../../utils/components/DocumentsModal/services';
import { log } from 'util';

// REAL ESTATES
// Services: GET
const getRealEstates = async ({
    pagination = 'pagination',
    page = 1,
    pageSize = 10,
    q = null,
}): Promise<IPaginable<IRealEstateAttributes> | string> => {
    try {
        let URI = `/real-estates/list/`;
        let res: AxiosResponse<IPaginable<IRealEstateAttributes>> =
            await http.get(URI, {
                params: {
                    page,
                    pageSize,
                    with: pagination,
                    ...(q ? { q } : {}),
                },
            });
        //console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const getRealEstatesByProject = async (
    id: number
): Promise<IPaginable<IRealEstateAttributes> | string> => {
    if (Number.isInteger(id)) {
        try {
            let URI = `/real-estates/project/`;
            let res: AxiosResponse<IPaginable<IRealEstateAttributes>> =
                await http.get(URI, {
                    params: { id },
                });
            return res.data;
        } catch (error) {
            console.error(error);
            return Promise.reject('Error');
        }
    }
};

export const getRealEstate = async (
    id: string
): Promise<IRealEstateAttributes | string> => {
    try {
        let URI = `/real-estates`;
        let res: AxiosResponse<IRealEstateResponse> = await http.get(URI, {
            params: { id },
        });

        res.data.results.supports_documents = await get_docucments_whit_service(
            res.data.results.supports_documents
        );

        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

const get_docucments_whit_service = async (docs) => {
    try {
        if (!Array.isArray(docs) && typeof docs === 'string') {
            docs = docs.split(',');
        }
        if (Array.isArray(docs) && docs.length > 0) {
            let documents: any = await get_documents_by_ids(docs.join(','));
            return documents.map((doc) => ({
                ...doc,
                label:
                    doc.type === 3
                        ? 'Documento de Matricula'
                        : doc.type === 4
                        ? 'Documento de Titulo'
                        : 'Anexo',
            }));
        }
        return [];
    } catch (e) {
        return Promise.reject('Error');
    }
};

// Services: POST
export const createRealEstate = async (
    data: any
): Promise<IRealEstateAttributes | string> => {
    try {
        let URI = `/real-estates`;
        // const docs: any = await compute_docs(data.supports_documents);
        // const docs_ids = await upload_documents(docs);

        const aux_data = {
            ...data,
            supports_documents: '',
        };
        delete aux_data.id;
        delete aux_data.status;
        delete aux_data.acquisitions;
        delete aux_data.audit_trail;
        delete aux_data.registry_number_document_id;
        delete aux_data.project_id;
        delete aux_data.sap_id;
        delete aux_data.active_code;
        delete aux_data.fixed_assets;

        if (aux_data.project?.id !== 0) {
            delete aux_data.dependency;
            delete aux_data.subdependency;
            delete aux_data.cost_center;
            delete aux_data.management_center;
        }

        let res: AxiosResponse<IRealEstateResponse> = await http.post(
            URI,
            aux_data
        );

        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

//TODO: Crear realEstates englobe - desenglobe
export const createRealEstates = async (
    data: any
): Promise<any | []> => {
    try {
        let URI = `/real-estates`;
        data.map(realEstate => {
            delete realEstate.id;
            delete realEstate.project_id;
            delete realEstate.active_code;
            delete realEstate.status;
            delete realEstate.acquisitions;
            delete realEstate.audit_trail;
            delete realEstate.registry_number_document_id;
            delete realEstate._type;
            delete realEstate.key;
            delete realEstate.document;
            delete realEstate.document;
            delete realEstate.supports_documents;
        })
        console.log(data)

    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

// Services: PUT
export const updateRealEstate = async (data: any, id: number) => {
    try {
        let URI = `/real-estates`;
        const docs: any = await compute_docs(data.supports_documents);
        const docs_ids = await upload_documents(docs);

        const aux_data = { ...data, supports_documents: docs_ids };
        delete aux_data.id;
        delete aux_data.status;
        delete aux_data.acquisitions;
        delete aux_data.audit_trail;
        delete aux_data.registry_number_document_id;
        delete aux_data.reconstruction_value;
        delete aux_data.project_id;
        delete aux_data.sap_id;
        delete aux_data.active_code;
        delete aux_data.fixed_assets;

        if (aux_data.project?.id !== 0) {
            delete aux_data.dependency;
            delete aux_data.subdependency;
            delete aux_data.cost_center;
            delete aux_data.management_center;
        }

        let res: AxiosResponse<IRealEstateResponse> = await http.put(
            URI,
            aux_data,
            {
                params: { id: id },
            }
        );

        swal.fire({
            title: 'Bien Inmueble actualizado.',
            text: res.data.message,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        });

        res.data.results.supports_documents = await get_docucments_whit_service(
            res.data.results.supports_documents
        );
        return res.data.results;
    } catch (error) {
        console.log('error', { ...error });
        return Promise.reject('Error');
    }
};

export const getIdFromLocation = async ({
    city,
    state,
    country,
    commune,
    neighborhood,
}) => {
    try {
        let URI = '/localizations/id/';
        let res = await http.get(URI, {
            params: { city, state, country, commune, neighborhood },
        });
        return res.data.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

const getAddress = async (values) => {
    try {
        const res1 = await getIdFromLocation({
            city: values.municipio,
            state: values.departamento,
            country: values.pais,
            commune: values.commune,
            neighborhood: values.barrio,
        });
        const res2 = await insertAddress({
            type: values.tipo,
            number_one: values.numero1,
            word_one: values.letra1,
            number_two: values.numero2,
            indicative: values.indicativo,
            user_id: '',
            location_id: res1.id,
        });
        const res3 = await getAddressById(res2.id);
        return res3.data.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

const deleteRealEstate = async (id) => {
    try {
        let URI = `/real-estates/delete`;
        let res: AxiosResponse<IRealEstateResponse> = await http.delete(URI, {
            params: { id },
        });

        swal.fire({
            title: 'Bien Inmueble Inactivado',
            text: res.data.message,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        });

        return res.data;
    } catch (error) {
        console.error(error);
        swal.fire({
            title: 'Error al inactivar Bien Inmueble',
            text: error.message,
            icon: 'error',
            showConfirmButton: false,
        });
        return Promise.reject('Error in delete real estate');
    }
};

const createAcquisitionForRealEstate = async (
    acquisitions: AdquisitionsItf[]
) => {
    try {
        let URI = '/real-estates/adquisitions/';
        let res: AxiosResponse = await http.post(
            URI,
            {
                data: acquisitions.filter((a: any) => !a.hasOwnProperty('id')),
            },
            {
                params: {
                    action: 'many',
                },
            }
        );
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error in  create acquisition for real estate');
    }
};

const getAcquisitionForRealEstate = async (real_estate_id) => {
    try {
        let URI = '/real-estates/adquisitions/';
        let res: AxiosResponse = await http.get(URI, {
            params: {
                real_estate_id,
            },
        });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error in get acquisition for real estate');
    }
};

const services = {
    getRealEstates,
    getRealEstatesByProject,
    getRealEstate,
    createRealEstate,
    createRealEstates,
    updateRealEstate,
    getAddress,
    deleteRealEstate,
    createAcquisitionForRealEstate,
    getAcquisitionForRealEstate,
};

export default services;
