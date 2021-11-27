import {
    get_list_users,
    get_all_users,
    create_user,
    delete_user,
    get_user_by_id,
    update_user,
    assignRolesAndPermits
} from './user';

import {
    getRole,
    getRolesList,
    createRole,
    getRoles,
    deleteRole,
    updateRole,
    getPermits,
} from './roles';

const services = {
    get_list_users,
    get_all_users,
    create_user,
    delete_user,
    get_user_by_id,
    update_user,
    getRole,
    getRolesList,
    getRoles,
    createRole,
    updateRole,
    deleteRole,
    getPermits,
    assignRolesAndPermits,
};

export default services;
export * from './user';
