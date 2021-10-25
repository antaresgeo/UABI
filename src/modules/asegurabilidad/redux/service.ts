import { AxiosResponse } from "axios";
import { http } from "../../../config/axios_instances";
import { swal } from "../../../utils";
import { IPolicyAttributes, IPolicyResponse } from "../../../utils/interfaces/components.interfaces";
import { IPoliciesResponse } from './../../../utils/interfaces/components.interfaces';

// Services: POST
const createPolicy = async (
    data :any
): Promise<IPolicyAttributes | string> => {
    try {
        
        let URI = `/policies`;
        console.log("@f",data);
        let res: AxiosResponse<IPolicyResponse> = await http.post(URI, data);
        //await swal.fire("poliza creada", res.data.message, "success");
        return res.data.data;
        
    } catch (error) {
        console.error(error);
        await swal.fire("Error", "", "error");

        return Promise.reject("Error");
    }
};

const getPolicies = async (): Promise<IPolicyAttributes[] | string> => {
    try {
        let URI = `/policies/lists/`;
        let res: AxiosResponse<IPoliciesResponse> = await http.get(URI);
        return res.data.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};


export const getPolicy = async (
    id: string
): Promise<IPolicyAttributes | string> => {
    try {
        let URI = `/policies`;
        let res: AxiosResponse<IPolicyResponse> = await http.get(URI, {
            params: { id },
        });

        return res.data.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

// Services: PUT
export const updatePolicy = async (data: any, id: number) => {
    try {
        let URI = `/policies`;
        let res: AxiosResponse<IPolicyResponse> = await http.put(URI, data, {
            params: { id },
        });

        return res;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

const services = {
    createPolicy,
    getPolicies,
    getPolicy,
    updatePolicy

};

export default services;
