import { AxiosResponse } from 'axios';
import { documents_http } from '../../../config/axios_instances';

export const getFiles = async (id) => {
    try {
        const URI = `documental-management`;
        const res: AxiosResponse<any> = await documents_http.get(URI,{
            params: { id }
        });
        return res.data.results;
    } catch (e) {
        return Promise.reject('Error');
    }
};
const services = {
    getFiles
};

export default services;
