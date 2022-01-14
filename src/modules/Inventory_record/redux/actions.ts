import types from './types';
import service, { registration } from './service';
import { request_dispatch } from '../../../utils';

// const example = (filters = {}) =>
//     request_dispatch(types.example_type, service.example_service(filters));

const get_list_registrations = () =>
    request_dispatch(
        types.get_list_registrations,
        service.get_all_registrations()
    );
const get_all_registrations = (filters?) =>
    request_dispatch(
        types.get_all_registrations,
        service.get_all_registrations(filters)
    );
const create_registration = (data: registration) =>
    request_dispatch(
        types.create_registration,
        service.create_registration(data)
    );
const delete_registration = (id) =>
    request_dispatch(
        types.delete_registration,
        service.delete_registration(id)
    );
const get_registration_by_id = (id) =>
    request_dispatch(
        types.get_registration,
        service.get_registration_by_id(id)
    );
const update_registration = (id, data: registration) =>
    request_dispatch(
        types.update_registration,
        service.update_registration(id, data)
    );
const clear_registration = () =>
    request_dispatch(types.clear_registration, Promise.resolve());

const actions = {
    get_list_registrations,
    get_all_registrations,
    create_registration,
    delete_registration,
    get_registration_by_id,
    update_registration,
    clear_registration,
};

export default actions;
