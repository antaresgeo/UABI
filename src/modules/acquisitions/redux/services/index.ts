
import { location_http } from '../../../../config/axios_instances';
import { IDocumentResponse } from '../../../../utils/interfaces';

// PROJECTS
import projectsServices from './projects';

// REAL ESTATES
import realEstatesServices from './realEstates';
import { AxiosResponse } from 'axios';
import { IAddress } from '../../../../utils/interfaces';

interface IProps {
    id: number;
}

const getIdFromLocation = async ({
    city,
    state,
    country,
    commune,
    neighborhood,
}): Promise<number | string> => {
    try {
        let URI = '/localizations/id/';
        let res: AxiosResponse<IDocumentResponse<IProps>> =
            await location_http.get(URI, {
                params: { city, state, country, commune, neighborhood },
            });

        return res.data.results.id;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const insertAddress = async (data: IAddress) => {
    try {
        let URI = '/addresses/';
        let res: AxiosResponse<IDocumentResponse<any>> =
            await location_http.post(URI, {
                ...data,
            });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const getAddressById = async (id) => {
    try {
        let URI = '/addresses/formated/';
        let res = await location_http.get(URI, { params: { id } });

        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};

const getAddress = async (values) => {
    let idLocation: any;
    try {
        idLocation = await getIdFromLocation({
            country: values.country,
            state: values.state,
            city: values.city,
            commune: values.commune,
            neighborhood: values.neighborhood,
        });
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }

    // INSERT ADDRESS WITH ID LOCATION
    let addressValues: IAddress = {
        type: values.type,
        number_one: values.number_one,
        number_two: values.number_two,
        indicative: values.indicative,
        user_id: 'Administrador',
        location_id: idLocation,
    };

    if (values.word_one) addressValues.word_one = values.word_one;
    if (values.orientation_one)
        addressValues.orientation_one = values.orientation_one;
    if (values.word_two) addressValues.word_two = values.word_two;
    if (values.orientation_two)
        addressValues.orientation_two = values.orientation_two;
    if (values.block) addressValues.block = values.block;
    if (values.lot) addressValues.lot = values.lot;
    if (values.indications) addressValues.indications = values.indications;

    try {
        return await insertAddress(addressValues);
    } catch (e) {
        return Promise.reject('Error insertando la dirección');
    }
};
//  localizations/lists
// const localizationsLists = async (filters) => {
//     try {
//         const URI = '/localizations/lists/';
//         let res = await location_http.get(URI, { params: { ...filters } });
//         return res.data.results;
//     } catch (e) {
//         return Promise.reject('Error');
//     }
// };

const services = {
    ...projectsServices,
    ...realEstatesServices,
    getAddress,
    insertAddress,
    getIdFromLocation,
};

export default services;
