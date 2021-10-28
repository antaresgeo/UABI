import { AxiosResponse } from "axios";
import { http } from "../../../config/axios_instances";
import { IUserAttributes, IUserResponse, IUsersResponse } from "../../../utils/interfaces/users";
import { swal } from './../../../utils';

const getUser = async (
    id: number
): Promise<IUserAttributes | number> => {
    try {
        let URI =  `/users`;
        let res: AxiosResponse<IUserResponse> = await http.get(URI, {
            params: { id }
        });
        return res.data.results;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
}
const getUsers = async ({
    page = 1,
    pageSize = 10,
    q = null,
}): Promise<IUserAttributes[] | string >  => {
    try {
        let URI= `/users/list`;
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
        return Promise.reject("Error");
    }
}

const createUser = async (
    data: any
): Promise<IUserAttributes | string > => {
    try {
        let URI = `/users`;
        let res: AxiosResponse<IUserResponse> = await http.post(URI, data);
        await swal.fire("Usuario Creado", res.data.message, "success");
        return res.data.results;
    } catch (error) {
        console.error(error);
        await swal.fire("Error", "", "error");

        return Promise.reject("Error");
    }
}

const updateUser = async (data: any, id: number) => {
    try {
        let URI = `/users`;
        let res: AxiosResponse<IUserResponse> = await http.put(URI, data, {
            params: id
        });
        return res;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
}

const deleteUser = async (id: number) => {
    try {
        let URI = `users/delete`;
        let res: AxiosResponse<IUserResponse> = await http.delete(URI, {
            params: { id }
        });
        swal.fire({
            title: "Usuario Inactivado",
            text: res.data.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
        })
        return res.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error in delete User");
    }
}
const services = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
export default services;
