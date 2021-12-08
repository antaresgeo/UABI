import types from '../types';
import service from '../services';
import { request_dispatch } from '../../../../utils';

// ACTIONS | REAL ESTATES
import {
    getRealEstate,
    getRealEstates,
    getRealEstatesByProject,
    createRealEstate,
    createRealEstates,
    updateRealEstate,
    deleteRealEstate,
    createAcquisitionForRealEstate,
    getTipologies,
    getTipology,
    updateAcquisition
} from './realEstates';

// const example = (filters = {}) =>
// request_dispatch(types.realEstates, service.getRealEstates());

// ACTIONS | PROJECTS
const getProject = (id: string) =>
    request_dispatch(types.project, service.getProject(id));

const getProjects = (filters?: any) =>
    request_dispatch(types.projects, service.getProjects({ ...filters }));

const createProject = (values) =>
    request_dispatch(types.project, service.createProject(values));

const updateProject = (data: any, id) =>
    request_dispatch(types.project, service.updateProject(data, id));

const deleteProject = (id) =>
    request_dispatch(types.deleteProject, service.deleteProject(id));

const actions = {
    // example
    getProject,
    getProjects,
    createProject,
    updateProject,
    deleteProject,
    getRealEstates,
    getRealEstatesByProject,
    getRealEstate,
    createRealEstate,
    createRealEstates,
    updateRealEstate,
    deleteRealEstate,
    createAcquisitionForRealEstate,
    getTipologies,
    getTipology,
    updateAcquisition
};
export default actions;
