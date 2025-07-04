import { environment } from '@/environment';
import Axios, { type AxiosError } from 'axios';

const { VITE_APP_URL, VITE_APP_DEBUG } = environment;

const axios = Axios.create({
    baseURL: VITE_APP_URL,
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
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
    (error: AxiosError) => {
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
