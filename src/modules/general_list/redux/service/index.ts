
import {
    get_list_tipologies,
    get_all_tipologies,
    create_tipology,
    delete_tipology,
    get_tipology_by_id,
    update_tipology,
} from './tipology';
import {
    get_list_dependencies,
    get_all_dependencies,
    create_dependency,
    delete_dependency,
    get_dependency_by_id,
    update_dependency,
} from './dependency';
const services = {
    get_list_tipologies,
    get_all_tipologies,
    create_tipology,
    delete_tipology,
    get_tipology_by_id,
    update_tipology,
    get_list_dependencies,
    get_all_dependencies,
    create_dependency,
    delete_dependency,
    get_dependency_by_id,
    update_dependency,
};

export default services;
export * from './tipology';
