import axios from 'axios';
import response_error_interceptor from "./axios_utils";

const BASE_URL_DOCUMENTS = `${process.env.REACT_APP_URI_SERVICE_DOCUMENTS}`;
const API_URL_DOCUMENTS = `${BASE_URL_DOCUMENTS}${process.env.REACT_APP_API_DOCUMENTS_VERSION}`;

export const http = axios.create({
    baseURL: API_URL_DOCUMENTS,
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('_tk_');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

http.interceptors.response?.use(undefined, response_error_interceptor);









