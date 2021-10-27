// export { auth as authttp } from "./auth";
export { http } from './general';
export { http as location_http } from './location';
export { http as auth_http } from './auth';
export { zero } from './zero';
export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;
export const INTERNAL_SERVER_ERROR = 500;
export const BASE_URL = `${process.env.REACT_APP_API_ENDPOINT_URL}`;
export const API_URL = `${BASE_URL}${process.env.REACT_APP_API_VERSION}`;
