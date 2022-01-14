import types from './types';
import service from './service';
import { request_dispatch } from '../../../utils';

/*----------------Contracts---------------------*/
const get_list_contracts = () =>
    request_dispatch(types.get_list_contracts, service.get_list_contracts());

const get_all_contracts = (filters?) =>
    request_dispatch(
        types.get_all_contracts,
        service.get_all_contracts(filters)
    );

const create_contract = (data: any) =>
    request_dispatch(types.create_contract, service.create_contract(data));

const get_contract = (id) =>
    request_dispatch(types.get_contract, service.get_contract(id));

const update_contract = (id, data: any) =>
    request_dispatch(types.update_contract, service.update_contract(id, data));

const delete_contract = (id) =>
    request_dispatch(types.update_contract, service.delete_contract(id));

/*----------------Pre-Contracts---------------------*/
const create_precontract = (data: any, type) =>
    request_dispatch(types.create_precontractual, service.create_precontract(data, type));

const get_precontract = (id) =>
    request_dispatch(types.get_precontractual, service.get_precontract(id));

const update_precontract = (id, data: any) =>
    request_dispatch(types.update_precontractual, service.update_precontract(id, data));

const actions = {
    get_list_contracts,
    get_all_contracts,
    create_contract,
    get_contract,
    update_contract,
    create_precontract,
    get_precontract,
    update_precontract,
    delete_contract,
};
export default actions;
