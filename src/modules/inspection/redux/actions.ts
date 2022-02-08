import types from './types';
import service from './service';
import { request_dispatch } from '../../../utils';
import { Broker } from '../../asegurabilidad/redux/service';

const get_list_inspections = () =>
    request_dispatch(
        types.get_list_inspections,
        service.get_list_inspections()
    );
const get_all_inspections = (filters?) =>
    request_dispatch(
        types.get_all_inspections,
        service.get_all_inspections(filters)
    );
const create_inspection = (id, data) =>
    request_dispatch(types.create_inspection, service.create_inspection(id, data));
const delete_inspection = (id) =>
    request_dispatch(types.delete_inspection, service.delete_inspection(id));
const get_inspection_by_real_estate_id = (id) =>
    request_dispatch(
        types.get_inspection,
        service.get_inspection_by_real_estate_id(id)
    );
const update_inspection = (id, data: Broker) =>
    request_dispatch(
        types.update_inspection,
        service.update_inspection(id, data)
    );
const clear_inspection = () =>
    request_dispatch(types.clear_inspection, Promise.resolve());

const actions = {
    get_list_inspections,
    get_all_inspections,
    create_inspection,
    delete_inspection,
    get_inspection_by_real_estate_id,
    update_inspection,
    clear_inspection,
};
export default actions;
