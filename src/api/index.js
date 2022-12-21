import axios, { AxiosRequestConfig } from 'axios';

export const callRequest = () => {
    // const baseUrl = process.env.NEXT_PUBLIC_API_URI;
    const instance = axios.create({
        baseURL: `/api`,
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 15000,
    });

    instance.interceptors.request.use(async (config) => {
        // const accessToken = await storage.getItem('access_token');
        // if (accessToken) {
        //     if (config && config.headers) {
        //         config.headers.Authorization = `Bearer ${accessToken}`;
        //     }
        // }
        return config;
    });

    instance.interceptors.response.use(
        (response) => {
            if (response.data.status === '401') {
                return;
            }
            return response;
        },
        (error) => {
            if (error.response) {
                if (error.response.data && error.response.data.error) {
                }
            }
            return Promise.reject(error);
        }
    );
    return instance;
};
