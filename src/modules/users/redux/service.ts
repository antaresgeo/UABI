import { AxiosResponse } from 'axios';
import { http, auth_http } from '../../../config/axios_instances';
import {
    IUserAttributes,
    IUserResponse,
    IUsersResponse,
} from '../../../utils/interfaces/users';
import {
    IRolAttributes,
    IRolesResponse,
    IRolResponse,
} from '../../../utils/interfaces/roles'
import { swal } from '../../../utils';
import { IPermitAttributes, IPermitsResponse } from '../../../utils/interfaces/permits';

// USERS //

const getUser = async (id: number): Promise<IUserAttributes | number> => {
    try {
        let URI = `/users`;
        let res: AxiosResponse<IUserResponse> = await http.get(URI, {
            params: { id },
        });
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};
const getUsers = async ({
    page = 1,
    pageSize = 10,
    q = null,
}): Promise<IUserAttributes[] | string> => {
    try {
        let URI = `/users/list`;
        let res: AxiosResponse<IUsersResponse> = await http.get(URI, {
            params: {
                page,
                pageSize,
                ...(q ? { q } : {}),
            },
        });
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

const createUser = async (data: any): Promise<IUserAttributes | string> => {
    try {
        console.log(data);
        let URI = `/users`;
        let res: AxiosResponse<IUserResponse> = await http.post(URI, data);
        await swal.fire('Usuario Creado', res.data.message, 'success');
        return res.data.results;
    } catch (error) {
        console.error(error);
        await swal.fire('Error', '', 'error');

        return Promise.reject('Error');
    }
};

const updateUser = async (data: any, id: number) => {
    try {
        let URI = `/users`;
        let res: AxiosResponse<IUserResponse> = await http.put(URI, data, {
            params: id,
        });
        return res;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

const deleteUser = async (id: number) => {
    try {
        let URI = `users/delete`;
        let res: AxiosResponse<IUserResponse> = await http.delete(URI, {
            params: { id },
        });
        swal.fire({
            title: 'Usuario Inactivado',
            text: res.data.message,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        });
        return res.data;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error in delete User');
    }
};

const getRole = async (id: number): Promise<IRolAttributes | number> => {
    try {
        let URI = `/roles`;
        let res: AxiosResponse<IRolResponse> = await auth_http.get(URI, {
            params: { id },
        });
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

const getRolesList = async ({
    page = 1,
    pageSize = 10,
    q = null,
}): Promise<IRolAttributes[] | string> => {
    try {
        let URI = `/roles/`;
        let res: AxiosResponse<IRolesResponse> = await http.get(URI, {
            params: {
                page,
                pageSize,
                ...(q ? { q } : {}),
            },
        });
        console.log(res)
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

const getRoles = async (): Promise<IRolAttributes[] | string> => {
    try {
        let URI = `/roles`;
        let res: AxiosResponse<IRolesResponse> = await auth_http.get(URI);
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

const createRole = async (data: any): Promise<IRolAttributes | string> => {
    try {
        //console.log('role', data);
        let URI = `/roles`;
        let res: AxiosResponse<IRolResponse> = await auth_http.post(URI, data);
        await swal.fire('Rol Creado', res.data.message, 'success');
        return res.data.results;
    } catch (error) {
        console.error(error);
        await swal.fire('Error', '', 'error');

        return Promise.reject('Error');
    }
};
const updateRole = async (data: any, id: number) => {
    try {
        let URI = `/roles`;
        let res: AxiosResponse<IRolResponse> = await auth_http.put(URI, data, {
            params: { id },
        });
        await swal.fire('Rol actualizado', res.data.message, 'success');
        console.log(res)
        return res;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

const deleteRole = async (id: number) => {
    try {
        let URI = `roles/${id}`;
        let res: AxiosResponse<IRolResponse> = await auth_http.delete(URI);
        swal.fire({
            title: 'Rol Inactivado',
            text: res.data.message,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        });
        return res.data;
    } catch (error) {
        console.error(error);
        if (error?.response && error.response?.status === 400) {
            await swal.fire(
                'No se pudo inactivar',
                error.response?.data?.message || 'Error',
                'warning'
            );
        }
        return Promise.reject('Error in delete User');
    }
};

const getPermits = async (): Promise<IPermitAttributes[] | string> => {
    try {
        let URI = `/permits`;
        let res: AxiosResponse<IPermitsResponse> = await auth_http.get(URI);
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};


const services = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getRole,
    getRolesList,
    getRoles,
    createRole,
    updateRole,
    deleteRole,
    getPermits
};
export default services;
