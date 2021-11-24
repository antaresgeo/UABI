import authTypes from './types';
import service from './service';
import { service as user_service } from '../../users/redux';
// import { PasswordResetBody, RequestAccessBody } from '../custom_types';
import { decodeJWT, swal_warning } from '../../../utils';

export type TokenPayload = {
    access: string;
};

const nice_login = (dispatch) => (response) => {
    if (response?.data) {
        localStorage.removeItem('attemp');
        const { results } = response.data;
        dispatch(get_user(results));
    }
    return Promise.reject(response);
};

const bad_login = (dispatch) => (error) => {
    dispatch(loginFail(error));
    if (error?.response?.status === 400) {
        const { message, attemp } = error.response.data;
        const intententos = 9 - attemp;
        if (intententos <= 0) {
            return Promise.reject({ block: true });
        } else {
            localStorage.setItem('attemp', attemp);
            const text_2 = `${message}<br/><br/> ${
                intententos >= 3 ? `Intentos restantes ${intententos}` : ''
            }`;
            swal_warning.fire({
                title: 'Inico de sesión fallido',
                html: text_2,
            });
        }
    }
    return Promise.reject();
};

const get_user = (token: string) => {
    return (dispatch) => {
        const user_id = decodeJWT(token)?.id;
        return user_service.get_user_by_id(user_id).then((user) => {
            dispatch(newToken({ access: token }));
            dispatch(loginSuccess(user));
            return Promise.resolve(user);
        });
    };
};

const login = (idNumber: string, pass: string) => {
    return (dispatch: Function) => {
        return service
            .login(idNumber, pass)
            .then(nice_login(dispatch))
            .catch(bad_login(dispatch));
    };
};

// const refresh = () => {
//     return (dispatch: Function) => {
//         return service
//             .tokenRefresh()
//             .then((result) => {
//                 dispatch(newToken(result.data));
//                 return Promise.resolve(result.data);
//             })
//             .catch((error) => {
//                 dispatch(logOut());
//                 return Promise.reject(error);
//             });
//     };
// };

const newToken = (payload: TokenPayload): { type: string; payload: any } => ({
    type: authTypes.NEW_TOKEN,
    payload,
});

const loginSuccess = (user) => ({
    type: authTypes.LOGIN_SUCCESS,
    payload: { user },
});

const loginFail = (payload) => {
    return (dispatch: Function) => {
        dispatch({
            type: authTypes.LOGIN_FAIL,
            payload,
        });
    };
};

// const logOut = (): { type: string } => {
//     service.logout();
//     return {
//         type: authTypes.LOGOUT,
//     };
// };

// const change_password = (data: PasswordResetBody) => {
//     return (dispatch) => {
//         return service.change_password(data).then((response) => {
//             console.log(response);
//             return response;
//         });
//     };
// };

// const update_password = (password: string, is_new_user = false) => {
//     return (dispatch) => {
//         console.log("action update_password", password);
//         return service.update_password(password).then((response) => {
//             console.log(response);
//             if (is_new_user) {
//                 dispatch({ type: authTypes.FIRST_LOGIN });
//             }
//             return response;
//         });
//     };
// };

// const recovery_password = (user_text: string) => {
//     return (dispatch) => {
//         return service.recovery_password(user_text).then((response) => {
//             console.log(response);
//
//             return response;
//         });
//     };
// };

// const get_access = (data: RequestAccessBody) => {
//     return (dispatch) => {
//         return service.get_access(data).then((response) => {
//             console.log(response);
//             return response;
//         });
//     };
// };

const actions = {
    login,
    newToken,
    get_user,
    // refresh,
    // logOut,
    // change_password,
    // recovery_password,
    // get_access,
    // update_password,
};
export default actions;
