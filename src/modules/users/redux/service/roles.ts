import { AxiosResponse } from 'axios';
import {
    IRolAttributes,
    IRolesResponse,
    IRolResponse,
} from '../../../../utils/interfaces/roles';
import { auth_http } from '../../../../config/axios_instances';
import { swal } from '../../../../utils';
import {
    IPermitAttributes,
    IPermitsResponse,
} from '../../../../utils/interfaces/permits';

export const getRole = async (id: number): Promise<IRolAttributes | number> => {
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

export const getRolesList = async ({
    page = 1,
    pageSize = 10,
    q = null,
}): Promise<IRolAttributes[] | string> => {
    try {
        let URI = `/roles/`;
        let res: AxiosResponse<IRolesResponse> = await auth_http.get(URI, {
            params: {
                page,
                pageSize,
                ...(q ? { q } : {}),
            },
        });
        console.log(res);
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const getRoles = async (): Promise<IRolAttributes[] | string> => {
    try {
        let URI = `/roles`;
        let res: AxiosResponse<IRolesResponse> = await auth_http.get(URI);
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const createRole = async (
    data: any
): Promise<IRolAttributes | string> => {
    try {
        console.log(data);
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
export const updateRole = async (data: any, id: number) => {
    try {
        let URI = `/roles`;
        let res: AxiosResponse<IRolResponse> = await auth_http.put(URI, data, {
            params: { id },
        });
        await swal.fire('Rol actualizado', res.data.message, 'success');
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const deleteRole = async (id: number) => {
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

export const getPermits = async (): Promise<IPermitAttributes[] | string> => {
    try {
        let URI = `/permits`;
        let res: AxiosResponse<IPermitsResponse> = await auth_http.get(URI);
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};
