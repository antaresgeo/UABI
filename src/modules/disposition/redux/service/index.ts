import {
    get_all_contracts,
    get_list_contracts,
    create_contract,
    get_contract,
    update_contract,
} from './contracts';

const services = {
    get_all_contracts,
    get_list_contracts,
    create_contract,
    get_contract,
    update_contract,
};

export default services;
export * from './contracts';
