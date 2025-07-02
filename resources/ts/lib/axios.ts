import { env } from '@/env';
import Axios from 'axios';

const { VITE_APP_URL, VITE_APP_DEBUG } = env;

const axios = Axios.create({
    baseURL: VITE_APP_URL,
    headers: {
        Accept: 'application/json'
    },
    withCredentials: true,
    withXSRFToken: true
});

axios.interceptors.request.use(
    configuration => configuration,
    error => Promise.reject(error)
);

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            if (VITE_APP_DEBUG) console.error('AxiosError', error.response.data);
            if (VITE_APP_DEBUG) console.error('AxiosError', error.response.status);
            if (VITE_APP_DEBUG) console.error('AxiosError', error.response.headers);
        } else if (error.request) {
            if (VITE_APP_DEBUG) console.error('AxiosError', error.request);
        } else {
            if (VITE_APP_DEBUG) console.error('AxiosError', error.message);
        }
        if (VITE_APP_DEBUG) console.error('AxiosError', error.config);

        return Promise.reject(error);
    }
);

export { axios };
