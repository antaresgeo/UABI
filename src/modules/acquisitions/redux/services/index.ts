import { http } from "../../../../config/axios_instances";
import { location_http } from "../../../../config/axios_instances";

// PROJECTS
import projectsServices from "./projects";

// REAL ESTATES
import realEstatesServices from "./realEstates";

const getIdFromLocation = async ({
    city,
    state,
    country,
    commune,
    neighborhood,
}) => {
    try {
        let URI = "/localizations/id/";
        let res = await http.get(URI, {
            params: { city, state, country, commune, neighborhood },
        });
        return res.data.data;
    } catch (e) {
        return Promise.reject("Error");
    }
};

export const insertAddress = async ({
    type,
    number_one,
    word_one,
    number_two,
    indicative,
    user_id,
    location_id,
}) => {
    try {
        let URI = "/addresses/";
        let res = await http.post(URI, {
            type,
            number_one,
            word_one,
            number_two,
            indicative,
            user_id,
            location_id,
        });
        return res.data.data;
    } catch (e) {
        return Promise.reject("Error");
    }
};

export const getAddressById = async (id) => {
    try {
        let URI = "/addresses/formated/";
        let res = await location_http.get(URI, { params: { id } });
        return res.data.data;
    } catch (e) {
        return Promise.reject("Error");
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
            user_id: "",
            location_id: res1.id,
        });
        const res3 = await getAddressById(res2.id);
        return res3.data.data;
    } catch (e) {
        return Promise.reject("Error");
    }
};

const services = {
    ...projectsServices,
    ...realEstatesServices,
    getAddress,
    insertAddress,
    getIdFromLocation,
};

export default services;
