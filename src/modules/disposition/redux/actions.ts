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

const actions = {
    get_list_contracts,
    get_all_contracts,
    create_contract,
    get_contract,
    update_contract,
};
export default actions;
