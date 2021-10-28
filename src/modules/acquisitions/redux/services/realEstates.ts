import { AxiosResponse } from 'axios';
import { getAddressById, insertAddress } from '.';
import { http } from '../../../../config/axios_instances';
import { swal } from '../../../../utils';

import {
    AdquisitionsItf,
    IPaginable,
    IRealEstateAttributes,
    IRealEstateResponse
} from '../../../../utils/interfaces';

// REAL ESTATES
// Services: GET
const getRealEstates = async ({
    page = 1,
    pageSize = 10,
    q = null,
}): Promise<IPaginable<IRealEstateAttributes> | string> => {
    try {
        let URI = `/real-estates/lists/`;
        console.log(q);
        let res: AxiosResponse<IPaginable<IRealEstateAttributes>> =
            await http.get(URI, {
                params: {
                    page,
                    pageSize,
                    ...(q ? { q } : {}),
                },
            });
        return res.data;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const getRealEstatesByProject = async (
    id: number
): Promise<IPaginable<IRealEstateAttributes> | string> => {
    if (id) {
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

        // const auxRes = {...res.data.results, audit_trail: {...res.data.}}

        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

// Services: POST
export const createRealEstate = async (
    data: any
): Promise<IRealEstateAttributes | string> => {
    try {
        let URI = `/real-estates`;
        const aux_data = { ...data };
        delete aux_data.id;
        delete aux_data.status;
        delete aux_data.acquisitions;
        delete aux_data.audit_trail;
        delete aux_data.supports_documents;
        delete aux_data.registry_number_document_id;
        delete aux_data.reconstruction_value;

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

// Services: PUT
export const updateRealEstate = async (data: any, id: number) => {
    try {
        let URI = `/real-estates`;

        const aux_data = { ...data };
        delete aux_data.id;
        delete aux_data.status;
        delete aux_data.acquisitions;
        delete aux_data.audit_trail;
        delete aux_data.supports_documents;
        delete aux_data.registry_number_document_id;
        delete aux_data.reconstruction_value;

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

        return res.data.results;
    } catch (error) {
        console.error(error);
        swal.fire({
            title: 'Bien Inmueble actualizado con error.',
            text: 'Error',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        });
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
        let res: AxiosResponse = await http.post(URI, acquisitions);
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
    updateRealEstate,
    getAddress,
    deleteRealEstate,
    createAcquisitionForRealEstate,
    getAcquisitionForRealEstate
};

export default services;
