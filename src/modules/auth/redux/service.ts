import { auth_http } from '../../../config/axios_instances';
import { base64Encode } from '../../../utils';
// import { PasswordResetBody, RequestAccessBody } from "../custom_types";

const get_roles_and_permits = async () => {
    return await auth_http.get('/users/roles-and-permits/');
};
const services = {
    login: async (idNumber, pass) => {
        const password64 = await base64Encode(pass);
        const attemp = parseInt(localStorage.getItem('attemp'));
        console.log(
            `%c Login `,
            'background: #ffff00; color: #000; padding: 8px; border-radius: 4px;'
        );
        return await auth_http.post('/auth/login/', {
            idNumber,
            password64,
            attemp,
        });
    },
    get_roles_and_permits,
    // tokenRefresh: async () => {
    //     console.log(
    //         `%c Refresh `,
    //         "background: #ffff00; color: #000; padding: 8px; border-radius: 4px;"
    //     );
    //     return auth_http.post("/token/refresh/", {
    //         refresh: localStorage.getItem("_rf_"),
    //     });
    // },
    // logout: async () => {
    //     return auth_http
    //         .get("/logout/")
    //         .then((response) => {
    //             console.log(
    //                 `%c LogOut `,
    //                 "background: #ffff00; color: #000; padding: 8px; border-radius: 4px;"
    //             );
    //         })
    //         .catch((response) => console.log({ response }));
    // },tokenRefresh: async () => {
    //     console.log(
    //         `%c Refresh `,
    //         "background: #ffff00; color: #000; padding: 8px; border-radius: 4px;"
    //     );
    //     return auth_http.post("/token/refresh/", {
    //         refresh: localStorage.getItem("_rf_"),
    //     });
    // },
    // logout: async () => {
    //     return auth_http
    //         .get("/logout/")
    //         .then((response) => {
    //             console.log(
    //                 `%c LogOut `,
    //                 "background: #ffff00; color: #000; padding: 8px; border-radius: 4px;"
    //             );
    //         })
    //         .catch((response) => console.log({ response }));
    // },

    // get_access: async (data: RequestAccessBody) => {
    //     return auth_http.post("/accounts/request-access/", data);
    // },
    // change_password: async ({ password, code }: PasswordResetBody) => {
    //     return auth_http.post("/accounts/reset/", { password, code });
    // },

    // update_password: async (password: string) => { // TODO: realizar esta actulizacion con el servicio de update del usuario
    //     const response = await http.post("/accounts/update/", { password });
    //     return response?.data;
    // },
    // recovery_password: async (email) => {
    //     return auth_http.post("/accounts/recovery/", { email });
    // },
};

export default services;
