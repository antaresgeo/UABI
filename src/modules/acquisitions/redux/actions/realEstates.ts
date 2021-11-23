import { request_dispatch } from '../../../../utils';
import types from '../types';
import service from '../services';
import { AdquisitionsItf } from '../../../../utils/interfaces';

// REAL ESTATES
export const getRealEstates = (filters: {
    page?: number;
    pageSize?: 10 | 20 | 30;
    q?: {};
}) => {
    //console.log('action:', filters.q);
    return request_dispatch(types.realEstates, service.getRealEstates(filters));
};

export const getRealEstatesByProject = (id) =>{
    return request_dispatch(
        types.realEstates,
        service.getRealEstatesByProject(id)
    );

}


export const getRealEstate = (id: string) =>
    request_dispatch(types.realEstate, service.getRealEstate(id));

export const createRealEstate = (data) =>
    request_dispatch(types.realEstate, service.createRealEstate(data));

export const createRealEstates = (data) =>
    request_dispatch(types.realEstates, service.createRealEstates(data));

export const updateRealEstate = (data, id) =>
    request_dispatch(types.realEstate, service.updateRealEstate(data, id));

export const deleteRealEstate = (id) =>
    request_dispatch(types.deleteRealEstate, service.deleteRealEstate(id));

export const createAcquisitionForRealEstate = (
    acquisitions: AdquisitionsItf[]
) =>
    request_dispatch(
        types.acquisition_create,
        service.createAcquisitionForRealEstate(acquisitions)
    );

export const clearRealEstate = () =>
        request_dispatch(types.clearRealEstate, Promise.resolve(null) )
