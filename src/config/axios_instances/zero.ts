import axios from 'axios';
export const BASE_URL = `${process.env.REACT_APP_API_ENDPOINT_URL}`;
export const API_URL = `${BASE_URL}${process.env.REACT_APP_API_VERSION}`;

export const zero = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});
zero.interceptors.request.use((config) => {
    if (config.url !== '/auth/oidc-token/') {
        const token = localStorage.getItem('_tk_');
        if (token) {
            config.data = { ...config.data, token };
        }
    }
    return config;
});
