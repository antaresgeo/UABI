import { AxiosResponse } from "axios";
import { http } from "../../../config/axios_instances";
import {
    IProjectAttributes,
    IProjectResponse,
    IProjectsResponse,
    IRealEstateAttributes,
    IRealEstateResponse,
    IRealEstatesResponse,
} from "../../../utils/interfaces/components.interfaces";
import { service } from "./index";

// PROJECTS
// Services: GET
export const getProject = async (
    id: string
): Promise<IProjectAttributes | string> => {
    try {
        let URI = `/projects`;
        let res: AxiosResponse<IProjectResponse> = await http.get(URI, {
            params: { id },
        });

        return res.data.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

export const getProjects = async (): Promise<IProjectAttributes[] | string> => {
    try {
        let URI = `/projects/lists`;
        let res: AxiosResponse<IProjectsResponse> = await http.get(URI);

        return res.data.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

// Services: POST
export const createProject = async (
    name: string,
    description: string,
    dependency: string
): Promise<IProjectResponse | string> => {
    try {
        let URI = `/projects`;
        let res: AxiosResponse<IProjectResponse> = await http.post(URI, {
            name,
            description,
            dependency,
        });

        return res.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

// Services: PUT
export const updateProject = async (data: any, id: number) => {
    try {
        let URI = `/projects`;
        let res: AxiosResponse<IProjectResponse> = await http.put(URI, data, {
            params: { id },
        });

        return res;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

export const altStatusProject = async (id: number) => {
    try {
        let URI = `/projects/alt-status`;
        let res: AxiosResponse<IProjectResponse> = await http.put(URI, null, {
            params: { id },
        });

        return res;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

// REAL ESTATES
// Services: GET
const getRealEstates = async (): Promise<IRealEstateAttributes[] | string> => {
    try {
        let URI = `/real-estates/lists/`;
        let res: AxiosResponse<IRealEstatesResponse> = await http.get(URI);
        return res.data.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

export const getRealEstatesByProject = async (
    id: string
): Promise<IRealEstateAttributes[] | string> => {
    try {
        let URI = `/real-estates/project`;
        let res: AxiosResponse<IRealEstatesResponse> = await http.get(URI, {
            params: { id },
        });
        console.log(res);

        return res.data.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
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

        return res.data.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

// Services: POST
export const createRealEstate = async (
    data: any
): Promise<IProjectResponse | string> => {
    try {
        let URI = `/real-estates`;
        let res: AxiosResponse<IProjectResponse> = await http.post(URI, data);

        return res.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

// Services: PUT
export const updateRealEstate = async (data: any, id: number) => {
    try {
        let URI = `/real-estates`;
        delete data["id"];
        delete data["audit_trail"];
        let res: AxiosResponse<IProjectResponse> = await http.put(URI, data, {
            params: { id: id },
        });

        return res;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
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
        let res = await http.get(URI, { params: { id } });
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
    getProject,
    getProjects,
    createProject,
    updateProject,
    altStatusProject,
    getRealEstates,
    getRealEstatesByProject,
    getRealEstate,
    createRealEstate,
    updateRealEstate,
    getAddress
};

export default services;
