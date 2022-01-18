import types from './types';
import service from './service';
import { request_dispatch } from '../../../utils';
import { Tipology } from './service/tipology';
import { Dependency } from './service/dependency';

/*----------------tipologies---------------------*/
const get_list_tipologies = () =>
    request_dispatch(types.get_list_tipologies, service.get_list_tipologies());
const get_all_tipologies = (filters?) =>
    request_dispatch(types.get_all_tipologies, service.get_all_tipologies(filters));
const clear_all_tipologies = () =>
    request_dispatch(types.get_all_tipologies, Promise.resolve([]));
const create_tipology = (data: Tipology) =>
    request_dispatch(types.create_tipology, service.create_tipology(data));
const delete_tipology = (id) =>
    request_dispatch(types.delete_tipology, service.delete_tipology(id));
const get_tipology_by_id = (id) =>
    request_dispatch(types.get_tipology, service.get_tipology_by_id(id));
const update_tipology = (id, data: any) =>
    request_dispatch(types.update_tipology, service.update_tipology(id, data));
const clear_tipology = () =>
    request_dispatch(types.clear_tipology, Promise.resolve());

/*----------------Dependencies---------------------*/
const get_list_dependencies = () =>
    request_dispatch(types.get_list_dependencies, service.get_list_dependencies());
const get_all_dependencies = (filters?) =>
    request_dispatch(types.get_all_dependencies, service.get_all_dependencies(filters));
const clear_all_dependencies = () =>
    request_dispatch(types.get_all_dependencies, Promise.resolve([]));
const create_dependency = (data: Dependency) =>
    request_dispatch(types.create_dependency, service.create_dependency(data));
const delete_dependency = (id) =>
    request_dispatch(types.delete_dependency, service.delete_dependency(id));
const get_dependency_by_id = (id) =>
    request_dispatch(types.get_dependency, service.get_dependency_by_id(id));
const update_dependency = (id, data: any) =>
    request_dispatch(types.update_dependency, service.update_dependency(id, data));
const clear_dependency = () =>
    request_dispatch(types.clear_dependency, Promise.resolve());

const actions = {
    // example
    get_list_tipologies,
    get_all_tipologies,
    clear_all_tipologies,
    create_tipology,
    delete_tipology,
    get_tipology_by_id,
    update_tipology,
    clear_tipology,
    get_list_dependencies,
    get_all_dependencies,
    clear_all_dependencies,
    create_dependency,
    delete_dependency,
    get_dependency_by_id,
    update_dependency,
    clear_dependency,
};


export default actions;
