import types from "./types";
import service from "./service";
import { request_dispatch } from "../../../utils";

// const example = (filters = {}) =>
//     request_dispatch(types.example_type, service.example_service(filters));
const getUser = (id: number) =>{
    return request_dispatch(types.user, service.getUser(id));}

const getUsers = (filters: {
    page?: number;
    pageSize?: 10 | 20 | 30;
    q?: string;
}) => request_dispatch(types.users, service.getUsers(filters));

const createUser = (data) =>
    request_dispatch(
        types.user,
        service.createUser(data)
    );

const updateUser = (data: any, id) =>
    request_dispatch(
        types.user,
        service.updateUser(data, id)
    );

const deleteUser = (id) =>
    request_dispatch(
        types.user,
        service.deleteUser(id)
    );

const actions = {
    // example
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
};

export default actions;
