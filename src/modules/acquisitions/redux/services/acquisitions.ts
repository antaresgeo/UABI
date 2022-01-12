import { AdquisitionsItf } from '../../../../utils/interfaces';
import moment from 'moment';
import { clearObjectNulls } from '../../../../utils';
import { AxiosResponse } from 'axios';
import { http } from '../../../../config/axios_instances';

const format_acquisitions = (
    id: number | string,
    acquisitions: AdquisitionsItf[]
): any[] => {
    return acquisitions.map((a: any) => {
        a.real_estate_id = typeof id === 'string' ? parseInt(id) : id;
        a.acquisition_date = new Date(
            moment(a.acquisition_date).format('YYYY/MM/DD')
        ).getTime();
        a.origin = a.origin.id;
        delete a.audit_trail;
        delete a.status;
        delete a.title_type_document_id;
        return clearObjectNulls(a);
    });
};

export const createAcquisitionForRealEstate = async (
    id,
    acquisitions: AdquisitionsItf[]
) => {
    try {
        const body = {
            data: format_acquisitions(id, acquisitions).filter(
                (a: any) => !a.hasOwnProperty('id')
            ),
        };
        let URI = '/real-estates/adquisitions/';
        let res: AxiosResponse = await http.post(URI, body, {
            params: {
                action: 'many',
            },
        });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error in  create acquisition for real estate');
    }
};

export const getAcquisitionForRealEstate = async (real_estate_id) => {
    try {
        let URI = '/real-estates/adquisitions/';
        let res: AxiosResponse = await http.get(URI, {
            params: {
                real_estate_id,
            },
        });
        return res.data.results.map((r) => {
            r.acquisition_date = moment(parseInt(r.acquisition_date)).format(
                'YYYY-MM-DD'
            );
            return r;
        });
    } catch (e) {
        return Promise.reject('Error in get acquisition for real estate');
    }
};

export const updateAcquisition = async (
    id: number,
    acquisitions: AdquisitionsItf[]
) => {
    try {
        const body = {
            acquisitions: format_acquisitions(id, acquisitions),
        };
        const res = await http.put(`/real-estates/adquisitions`, body, {
            params: {
                action: 'many',
            },
        });
        return res.data.results;
    } catch (e) {
        return Promise.reject(e);
    }
};
