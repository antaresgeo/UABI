import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_URI_SERVICE_AUTH}`;
const API_URL = `${BASE_URL}${process.env.REACT_APP_API_AUTH_VERSION}`;

export const auth = axios.create({
    baseURL: API_URL,
});

auth.interceptors.request.use((config) => {
    if (config.url !== '/auth/oidc-token/') {
        const token = localStorage.getItem('_tk_');
        if (token) {
            config.data = { ...config.data, token };
        }
    }
    return config;
});
