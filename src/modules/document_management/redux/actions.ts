import types from './types';
import service from './service';
import { request_dispatch } from '../../../utils';

// const example = (filters = {}) =>
//     request_dispatch(types.example_type, service.example_service(filters));

const getFiles = (id) =>
    request_dispatch(types.files, service.getFiles(id));

const actions = {
    // example
    getFiles
};
export default actions;
