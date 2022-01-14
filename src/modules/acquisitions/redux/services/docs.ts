// import { AxiosResponse } from 'axios';
// import { http } from '../../../../config/axios_instances';
// import { swal } from '../../../../utils';

// import {
//     // IPaginable,
//     IProjectAttributes,
//     IProjectsResponse,
//     IProjectResponse,
// } from '../../../../utils/interfaces';

// REAL ESTATES
// Services: GET
// export const getProject = async (
//     id: string
// ): Promise<IProjectAttributes | string> => {
//     try {
//         let URI = `/projects`;
//         let res: AxiosResponse<IProjectResponse> = await http.get(URI, {
//             params: { id },
//         });

//         return res.data.results;
//     } catch (error) {
//         console.error(error);
//         return Promise.reject("Error");
//     }
// };

// const getProjects = async ({
//     page = 1,
//     pageSize = 10,
//     q = null,
// }): Promise<IProjectAttributes[] | string> => {
//     try {
//         let URI = `/projects/lists`;
//         let res: AxiosResponse<IProjectsResponse> = await http.get(URI, {
//             params: {
//                 page,
//                 pageSize,
//                 ...(q ? { q } : {}),
//             },
//         });
//         return res.data.results;
//     } catch (error) {
//         console.error(error);
//         return Promise.reject("Error");
//     }
// };

// // Services: POST
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

//         return res.data.results;
//     } catch (error) {
//         console.error(error);
//         await swal.fire("Error", "", "error");

//         return Promise.reject("Error");
//     }
// };

// // Services: PUT
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

//         return res.data;
//     } catch (error) {
//         console.error(error);
//         return Promise.reject("Error in delete Project");
//     }
// };

const services = {
    // getProject,
    // getProjects,
    // createProject,
    // updateProject,
    // deleteProject,
};

export default services;
