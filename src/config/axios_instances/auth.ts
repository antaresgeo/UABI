import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_URI_SERVICE_AUTH}`;
const API_URL = `${BASE_URL}${process.env.REACT_APP_API_AUTH_VERSION}`;

export const http = axios.create({
    baseURL: API_URL,
});

http.interceptors.request.use((config) => {
    if(config.url === '/users/roles-and-permits/') {
        const token = localStorage.getItem('_tk_');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});
