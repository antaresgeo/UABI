import { AxiosResponse } from "axios";
import { http } from "../../../../config/axios_instances";
import { swal_success } from "../../../../utils";

export const create_precontract = async (data: any, type) => {
    console.log('datos para enviar', data, type)
    try {
        let URI = `/lease`;
        let res: AxiosResponse<any> = await http.post(
            URI,
            data
        );
        await swal_success.fire('Estudio Previo de arrendamiento Creado', res.data.message, 'success');
        return res.data.results;

    } catch (e) {
        return Promise.reject('Error');
    }
};

export const get_precontract = async (active_code) => {
    try {
        let URI = `/lease`;
        let res: AxiosResponse<any> = await http.get(URI, {
            params: { active_code },
        });
        return res.data;
    } catch (e) {
        return Promise.reject('Error');
    }
};

export const update_precontract = async (id, data: any) => {
    try {

    } catch (e) {
        return Promise.reject('Error');
    }
};
