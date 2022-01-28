import {
    createPolicy,
    getPolicies,
    getPolicy,
    updatePolicy,
    realEstatesPolicy,
    getRealEstatesWithoutPolicy,
} from './policy';
import {
    get_list_companies,
    get_all_companies,
    create_company,
    delete_company,
    get_company_by_id,
    update_company,
} from './company';
import {
    get_list_brokers,
    get_all_brokers,
    create_broker,
    delete_broker,
    get_broker_by_id,
    update_broker,
} from './broker';
const services = {
    createPolicy,
    getPolicies,
    getPolicy,
    updatePolicy,
    realEstatesPolicy,
    getRealEstatesWithoutPolicy,
    get_list_companies,
    get_all_companies,
    create_company,
    delete_company,
    get_company_by_id,
    update_company,
    get_list_brokers,
    get_all_brokers,
    create_broker,
    delete_broker,
    get_broker_by_id,
    update_broker,
};

export default services;
export * from './policy';
export * from './company';
export * from './broker';
