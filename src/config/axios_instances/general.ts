import axios from "axios";
import { FORBIDDEN, INTERNAL_SERVER_ERROR, UNAUTHORIZED } from "./index";
// import store, { AppDispatch } from "../../store";
import { swal } from "../../utils";

const BASE_URL = `${process.env.REACT_APP_URI_SERVICE_UABI}`;
const API_URL = `${BASE_URL}${process.env.REACT_APP_API_UABI_VERSION}`;

console.log(API_URL);

const response_error_interceptor = (error: any) => {
    if (!axios.isCancel(error)) {
        if (error.response) {
            switch (error.response?.status) {
                case UNAUTHORIZED: {
                    return onUnauthorized(error);
                }
                case FORBIDDEN: {
                    return onForbidden(error);
                }
                case INTERNAL_SERVER_ERROR: {
                    return onInternalServerError(error);
                }
                default: {
                    return Promise.reject(error);
                }
            }
        } else {
            // store.dispatch(auth.actions.logOut());
            swal.fire({
                title: "Warning",
                text: "We have detected a problem in your connection",
                icon: "warning",
            });
        }
    }
};

export const http = axios.create({
    baseURL: API_URL,
});
http.interceptors.request.use((config) => {
    const token = localStorage.getItem("_tk_");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
http.interceptors.response?.use(undefined, response_error_interceptor);

const compute_token = (token: string) => `Bearer ${token}`;

const get_on_hold = (original_config: any) => {
    return new Promise((resolve, reject) => {
        window.retry_pending.push({
            resolve,
            reject,
            url: original_config.url,
        });
    })
        .then((token: any) => {
            original_config.headers.Authorization = compute_token(token);
            return http.request(original_config);
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};

const validate_refresh = (original_config: any) => {
    if (window.is_in_refresh) {
        return get_on_hold(original_config);
    }
    original_config._retry = true;
    window.is_in_refresh = true;
    return original_config;
};

const processQueue = ({ error = null, token = null }) => {
    if (window.retry_pending.length) {
        window.retry_pending.forEach((prom) => {
            if (error) {
                prom.reject(error);
            } else if (token) {
                prom.resolve(token);
            } else {
                prom.reject(null);
            }
        });
        window.retry_pending = [];
    }
};

const onUnauthorized = (original_error: any) => {
    let original_config = original_error.config;
    if (!original_config._retry) {
        original_config = validate_refresh(original_config);
        return new Promise((resolve, reject) => {
            // const { logOut, newToken } = auth.actions;
            // const { tokenRefresh } = auth.service;
            // const dispatch: AppDispatch = store.dispatch;
            // tokenRefresh()
            //     .then((response) => {
            //         const token = response?.data?.access;
            //         dispatch(newToken(response?.data));
            //         original_config.headers.Authorization =
            //             compute_token(token);
            //         processQueue({ token });
            //         resolve(http.request(original_config));
            //     })
            //     .catch((error) => {
            //         processQueue({ error });
            //         reject(error);
            //         dispatch(logOut());
            //     })
            //     .then(() => {
            //         window.is_in_refresh = false;
            //     });
        });
    }
    return Promise.reject(original_error);
};

const onInternalServerError = (original_error: any) => {
    swal.fire({
        title: "Warning",
        text: "An unexpected error has occurred, please notify the system administrator!",
        icon: "warning",
        timer: 2000,
    });
    return Promise.reject(original_error);
    // store.dispatch(auth.actions.logOut());  avoid logout when a error happened
};

const onForbidden = (original_error: any) => {
    const { detail } = original_error.response?.data;
    if (detail) {
        swal.fire({
            title: "Warning",
            text: detail,
            icon: "warning",
        });
    }
    return Promise.reject(original_error);
};
