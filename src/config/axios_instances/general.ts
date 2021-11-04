import axios from 'axios';
import response_error_interceptor from './axios_utils';

const BASE_URL = `${process.env.REACT_APP_URI_SERVICE_UABI}`;
const API_URL = `${BASE_URL}${process.env.REACT_APP_API_UABI_VERSION}`;

export const http = axios.create({
    baseURL: API_URL,
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('_tk_');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

http.interceptors.response?.use(undefined, response_error_interceptor);
