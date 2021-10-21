import types from "../types";
import service from "../service";
import { request_dispatch } from "../../../../utils";

// ACTIONS | REAL ESTATES
import {
    getRealEstate,
    getRealEstates,
    getRealEstatesByProject,
    createRealEstate,
    updateRealEstate,
    deleteRealEstate,
} from "./realEstates";

// const example = (filters = {}) =>
// request_dispatch(types.realEstates, service.getRealEstates());

// ACTIONS | PROJECTS
const getProject = (id: string) =>
    request_dispatch(types.project, service.getProject(id));

const getProjects = () =>
    request_dispatch(types.projects, service.getProjects({}));

const createProject = (name, description, dependecy) =>
    request_dispatch(
        types.project,
        service.createProject(name, description, dependecy)
    );

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
    updateRealEstate,
    deleteRealEstate,
};
export default actions;
