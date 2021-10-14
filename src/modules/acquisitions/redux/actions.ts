import types from "./types";
import service from "./service";
import { request_dispatch } from "../../../utils";

// const example = (filters = {}) =>
// request_dispatch(types.realEstates, service.getRealEstates());

// PROJECTS
const getProject = (id: string) =>
    request_dispatch(types.project, service.getProject(id));

const getProjects = () =>
    request_dispatch(types.projects, service.getProjects());

const createProject = (name, description, dependecy) =>
    request_dispatch(
        types.project,
        service.createProject(name, description, dependecy)
    );

const updateProject = (data, id) =>
    request_dispatch(types.project, service.updateProject(data, id));

const altStatusProject = (id) =>
    request_dispatch(types.project, service.altStatusProject(id));

// REAL ESTATES
const getRealEstates = () =>
    request_dispatch(types.realEstates, service.getRealEstates());

const getRealEstatesByProject = (id) =>
    request_dispatch(types.realEstates, service.getRealEstatesByProject(id));

const getRealEstate = (id: string) =>
    request_dispatch(types.realEstate, service.getRealEstate(id));

// const setRealEstate = () =>
//         request_dispatch(types.realEstate, service.)

const createRealEstate = (data) =>
    request_dispatch(types.realEstate, service.createRealEstate(data));

const updateRealEstate = (data, id) =>
    request_dispatch(types.realEstate, service.updateRealEstate(data, id));

const actions = {
    // example
    getProject,
    getProjects,
    createProject,
    updateProject,
    altStatusProject,
    getRealEstates,
    getRealEstatesByProject,
    getRealEstate,
    createRealEstate,
    updateRealEstate,
};
export default actions;
