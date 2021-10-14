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
        return "Error";
    }
};

export const getProjects = async (): Promise<IProjectAttributes[] | string> => {
    try {
        let URI = `/projects/lists`;
        let res: AxiosResponse<IProjectsResponse> = await http.get(URI);

        return res.data.data;
    } catch (error) {
        console.error(error);
        return "Error";
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
        return "Error";
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
        return "Error";
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
        return "Error";
    }
};

// REAL ESTATES
// Services: GET
const getRealEstates = async (): Promise<IRealEstateAttributes[] | string> => {
    try {
        let URI = `/real-estates/lists/`;
        console.log("Works");
        let res: AxiosResponse<IRealEstatesResponse> = await http.get(URI);

        return res.data.data;
    } catch (error) {
        console.error(error);
        return "Error";
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
        return "Error";
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
        return "Error";
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
        return "Error";
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
        return "Error";
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
};

export default services;
