import { request_dispatch } from "../../../../utils";
import types from "../types";
import service from "../service";

// REAL ESTATES
export const getRealEstates = () =>
    request_dispatch(types.realEstates, service.getRealEstates());

export const getRealEstatesByProject = (id) =>
    request_dispatch(
        types.realEstates,
        service.getRealEstatesByProject(parseInt(id))
    );

export const getRealEstate = (id: string) =>
    request_dispatch(types.realEstate, service.getRealEstate(id));

export const createRealEstate = (data) =>
    request_dispatch(types.realEstate, service.createRealEstate(data));

export const updateRealEstate = (data, id) =>
    request_dispatch(types.realEstate, service.updateRealEstate(data, id));

// export const deleteRealEstate = (id) =>
// request_dispatch(types.realEstate, service.deleteRealEstate(id));