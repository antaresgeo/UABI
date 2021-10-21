import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_API_ENDPOINT_URL}`;
const API_URL = `${BASE_URL}${process.env.REACT_APP_API_VERSION}`;

export const auth = axios.create({
    baseURL: API_URL,
});

auth.interceptors.request.use((config) => {
    if (config.url !== "/auth/oidc-token/") {
        const token = localStorage.getItem("_tk_");
        if (token) {
            config.data = { ...config.data, token };
        }
    }
    return config;
});
