import { AxiosResponse } from 'axios';
import { http } from '../../../../config/axios_instances';
import { swal } from '../../../../utils';

import {
    IProjectAttributes,
    IProjectResponse,
    IProjectsResponse,
} from '../../../../utils/interfaces';

// REAL ESTATES
// Services: GET
export const getProject = async (
    id: string
): Promise<IProjectAttributes | string> => {
    try {
        let URI = `/projects`;
        let res: AxiosResponse<IProjectResponse> = await http.get(URI, {
            params: { id },
        });

        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

const getProjects = async (filters): Promise<any | string> => {
    try {
        let URI = `/projects/list`;
        let res: AxiosResponse<IProjectsResponse> = await http.get(URI, {
            params: {
                ...filters,
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

// Services: POST
export const createProject = async (
    values
): Promise<IProjectAttributes | string> => {
    console.log(values)
    try {
        const aux_values = { ...values };
        delete aux_values.id;
        delete aux_values.contracts;
        delete aux_values.dependency;
        delete aux_values.subdependency;
        delete aux_values.cost_center;
        delete aux_values.management_center;
        let URI = `/projects`;
        let res: AxiosResponse<IProjectResponse> = await http.post(URI, {
            ...aux_values,
        });

        await swal.fire('Proyecto creado', res.data.message, 'success');

        return res.data.results;
    } catch (error) {
        console.error(error);
        await swal.fire('Error', '', 'error');

        return Promise.reject('Error');
    }
};

// Services: PUT
export const updateProject = async (data: any, id: number) => {
    try {
        let URI = `/projects`;
        return await http.put(URI, data, {
            params: { id },
        });
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const deleteProject = async (id: number) => {
    try {
        let URI = `/projects/delete/`;
        let res: AxiosResponse<IProjectResponse> = await http.delete(URI, {
            params: { id },
        });

        swal.fire({
            title: 'Proyecto Inactivado',
            text: res.data.message,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        });

        return res.data;
    } catch (error) {
        if (error?.response && error.response?.status === 400) {
            await swal.fire(
                'No se pudo inactivar',
                error.response?.data?.message || 'Error',
                'warning'
            );
        }
        return Promise.reject('Error in delete Project');
    }
};


const getDependencies = async () => {
    try {
        let URI = `/dependencies`;
        let res: AxiosResponse<IProjectsResponse> = await http.get(URI);
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

const services = {
    getProject,
    getProjects,
    createProject,
    updateProject,
    deleteProject,
    getDependencies,
};

export default services;
