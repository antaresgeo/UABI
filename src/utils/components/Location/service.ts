import { AxiosResponse } from "axios";
import { swal } from "../../../utils";

import { IProjectResponse } from "../../../utils/interfaces/components.interfaces";
import {
    IAddressResponse,
    ICityAddressAttributes,
    ICommuneAddressAttributes,
    ICountryAddressAttributes,
    INeighborhoodAddressAttributes,
    IStateAddressAttributes,
} from "../../interfaces";
import { locationhttp } from "./../../../config/axios_instances";

interface IParams {
    country?: string;
    state?: string;
    city?: string;
    commune?: string;
    neighborhood?: string;
}

// PROJECTS
// Services: GET
export const getList = async (
    nameList: string
): Promise<
    | ICountryAddressAttributes[]
    | IStateAddressAttributes[]
    | ICityAddressAttributes[]
    | ICommuneAddressAttributes[]
    | INeighborhoodAddressAttributes[]
> => {
    let params: IParams;

    if (nameList === "country") params = { country: "true" };
    if (nameList === "state") params = { state: "true" };
    if (nameList === "city") params = { city: "true" };
    if (nameList === "commune") params = { commune: "true" };
    if (nameList === "neighborhood") params = { neighborhood: "true" };

    try {
        let URI = `/localizations/lists`;
        let res: AxiosResponse<IAddressResponse> = await locationhttp.get(URI, {
            params,
        });
        console.log(res.data);

        return res.data.data;
    } catch (error) {
        console.error(error);
        return Promise.reject("Error");
    }
};

// export const getProjects = async (): Promise<IProjectAttributes[] | string> => {
//     try {
//         let URI = `/projects/lists`;
//         let res: AxiosResponse<IProjectsResponse> = await http.get(URI);

//         return res.data.data;
//     } catch (error) {
//         console.error(error);
//         return Promise.reject("Error");
//     }
// };

// Services: POST
// export const createProject = async (
//     name: string,
//     description: string,
//     dependency: string
// ): Promise<IProjectAttributes | string> => {
//     try {
//         let URI = `/projects`;
//         let res: AxiosResponse<IProjectResponse> = await http.post(URI, {
//             name,
//             description,
//             dependency,
//         });

//         await swal.fire("Proyecto creado", res.data.message, "success");

//         return res.data.data;
//     } catch (error) {
//         console.error(error);
//         await swal.fire("Error", "", "error");

//         return Promise.reject("Error");
//     }
// };

// Services: PUT
// export const updateProject = async (data: any, id: number) => {
//     try {
//         let URI = `/projects`;
//         let res: AxiosResponse<IProjectResponse> = await http.put(URI, data, {
//             params: { id },
//         });

//         return res;
//     } catch (error) {
//         console.error(error);
//         return Promise.reject("Error");
//     }
// };

// export const deleteProject = async (id: number) => {
//     try {
//         let URI = `/projects/delete`;
//         let res: AxiosResponse<IProjectResponse> = await http.delete(URI, {
//             params: { id },
//         });

//         swal.fire({
//             title: "Proyecto Inactivado",
//             text: res.data.message,
//             icon: "success",
//             showConfirmButton: false,
//             timer: 1500,
//         });

//         return res.data.data;
//     } catch (error) {
//         console.error(error);
//         return Promise.reject("Error in delete Project");
//     }
// };

// export const getIdFromLocation = async ({
//     city,
//     state,
//     country,
//     commune,
//     neighborhood,
// }) => {
//     try {
//         let URI = "/localizations/id/";
//         let res = await http.get(URI, {
//             params: { city, state, country, commune, neighborhood },
//         });
//         return res.data.data;
//     } catch (e) {
//         return Promise.reject("Error");
//     }
// };

// export const insertAddress = async ({
//     type,
//     number_one,
//     word_one,
//     number_two,
//     indicative,
//     user_id,
//     location_id,
// }) => {
//     try {
//         let URI = "/addresses/";
//         let res = await http.post(URI, {
//             type,
//             number_one,
//             word_one,
//             number_two,
//             indicative,
//             user_id,
//             location_id,
//         });
//         return res.data.data;
//     } catch (e) {
//         return Promise.reject("Error");
//     }
// };
// export const getAddressById = async (id) => {
//     try {
//         let URI = "/addresses/formated/";
//         let res = await locationhttp.get(URI, { params: { id } });
//         return res.data.data;
//     } catch (e) {
//         return Promise.reject("Error");
//     }
// };

// const getAddress = async (values) => {
//     try {
//         const res1 = await getIdFromLocation({
//             city: values.municipio,
//             state: values.departamento,
//             country: values.pais,
//             commune: values.commune,
//             neighborhood: values.barrio,
//         });
//         const res2 = await insertAddress({
//             type: values.tipo,
//             number_one: values.numero1,
//             word_one: values.letra1,
//             number_two: values.numero2,
//             indicative: values.indicativo,
//             user_id: "",
//             location_id: res1.id,
//         });
//         const res3 = await getAddressById(res2.id);
//         return res3.data.data;
//     } catch (e) {
//         return Promise.reject("Error");
//     }
// };

const services = {
    getList,
};

export default services;