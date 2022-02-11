import { AxiosResponse } from 'axios';
import {
    IRolAttributes,
    IRolesResponse,
    IRolResponse,
} from '../../../../utils/interfaces/roles';
import { auth_http } from '../../../../config/axios_instances';
import {swal, swal_success, swal_warning} from '../../../../utils';
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

export const getRolesList = async (filters?): Promise<any> => {
    // console.log(filters)
    try {
        let URI = `/roles/`;
        let res: AxiosResponse<IRolesResponse> = await auth_http.get(URI, {
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
        let URI = `/roles`;
        let res: AxiosResponse<IRolResponse> = await auth_http.post(URI, data);
        await swal_success.fire('Rol Creado', res.data.message, 'success');
        return res.data.results;
    } catch (error) {
        console.error(error);
        await swal_warning.fire('Error', '', 'error');

        return Promise.reject('Error');
    }
};
export const updateRole = async (data: any, id: number) => {
    try {
        let URI = `/roles`;
        let res: AxiosResponse<IRolResponse> = await auth_http.put(URI, data, {
            params: { id },
        });
        await swal_success.fire('Rol actualizado', res.data.message, 'success');
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject('Error');
    }
};

export const deleteRole = async (id: number) => {
    try {
        let URI = `roles/${id}`;
        let res: AxiosResponse<IRolResponse> = await auth_http.delete(URI);
        await swal_success.fire({
            title: 'Rol Inactivado',
            text: res.data.message,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        });
        console.log('eiminado')
        return res.data;
    } catch (error) {
        console.error(error);
        if (error?.response && error.response?.status === 400) {
            await swal_warning.fire(
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
