import { request_dispatch } from '../../../../utils';
import types from '../types';
import service from '../services';
import { AdquisitionsItf } from '../../../../utils/interfaces';

// REAL ESTATES
export const getRealEstates = (filters: {
    with?: string;
    page?: number;
    pageSize?: 10 | 20 | 30;
    q?: {};
}) => {
    //console.log('action:', filters.q);
    return request_dispatch(types.realEstates, service.getRealEstates(filters));
};

export const getRealEstatesByProject = (id) => {
    return request_dispatch(
        types.realEstates,
        service.getRealEstatesByProject(id)
    );
};

export const getRealEstateByPolicy = (without: string) =>
    request_dispatch(types.realEstate, service.getRealEstatesBypolicy(without));

export const getRealEstate = (id: string) =>
    request_dispatch(types.realEstate, service.getRealEstate(id));

export const createRealEstate = (data) =>
    request_dispatch(types.realEstate, service.createRealEstate(data));

export const createRealEstates = (data, action) =>
    request_dispatch(types.realEstates, service.createRealEstates(data, action));

export const updateRealEstates = (data) =>
    request_dispatch(types.realEstates, service.updateRealEstates(data));

export const updateRealEstate = (data, id) =>
    request_dispatch(types.realEstate, service.updateRealEstate(data, id));

export const deleteRealEstate = (id) =>
    request_dispatch(types.deleteRealEstate, service.deleteRealEstate(id));

export const createAcquisitionForRealEstate = (
    id,
    acquisitions: AdquisitionsItf[]
) =>
    request_dispatch(
        types.acquisition_create,
        service.createAcquisitionForRealEstate(id, acquisitions)
    );

export const updateAcquisition = (id, acquisitions: AdquisitionsItf[]) =>
    request_dispatch(
        types.acquisition_create,
        service.updateAcquisition(id, acquisitions)
    );

export const clearRealEstates = () =>
    request_dispatch(types.realEstates, Promise.resolve([]));

export const clearRealEstate = () =>
    request_dispatch(types.realEstate, Promise.resolve(null));

export const getTipologies = () =>
    request_dispatch(types.tipologies, service.getTipologies());

export const getTipology = (id) =>
    request_dispatch(types.tipology, service.getTipology(id));
