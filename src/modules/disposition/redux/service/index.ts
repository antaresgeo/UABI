import {
    get_all_contracts,
    get_list_contracts,
    create_contract,
    get_contract,
    get_contracts_realestates,
    get_contract_realestate,
    get_contracts,
    update_contract,
    delete_contract,
} from './contracts';

import {
    create_precontract,
    get_precontract,
    update_precontract,
    inactivate_precontract,
} from './precontracts';

const services = {
    get_all_contracts,
    get_list_contracts,
    create_contract,
    get_contract,
    get_contracts_realestates,
    get_contract_realestate,
    get_contracts,
    update_contract,
    delete_contract,
    create_precontract,
    get_precontract,
    update_precontract,
    inactivate_precontract,
};

export default services;
export * from './contracts';
