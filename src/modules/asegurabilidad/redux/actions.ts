import types from './types';
import service from './service';
import { request_dispatch } from '../../../utils';

// const example = (filters = {}) =>
//     request_dispatch(types.example_type, service.example_service(filters));
const createPolicy = (dataPolicy) =>
    request_dispatch(types.policy, service.createPolicy(dataPolicy));

const getPolicy = (id: string) => {
    return request_dispatch(types.policy, service.getPolicy(id));
};
const getPolicies = (data) =>
    request_dispatch(types.policies, service.getPolicies(data));

const updatePolicy = (data: any, id) =>
    request_dispatch(types.policy, service.updatePolicy(data, id));

const policiesRealEstate = (id: number) =>
    request_dispatch(types.policiesRealEstate, service.policiesRealEstate(id))

const actions = {
    // example
    createPolicy,
    getPolicy,
    getPolicies,
    updatePolicy,
    policiesRealEstate,
};

export default actions;
