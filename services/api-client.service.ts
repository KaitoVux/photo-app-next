import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const apiClient: AxiosInstance = axios.create({
    baseURL: publicRuntimeConfig.API_URL ?? process.env.NEXT_PUBLIC_API_URL,
    headers: { 'Content-Type': 'application/json' },
} as AxiosRequestConfig);

// Add a request interceptor
apiClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
apiClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data?.data?.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        switch (error.response.status) {
            case 400:
                return {
                    data: null,
                    hasError: true,
                    error: [error.response.data],
                };
            case 401:
                // Handle Unauthorized calls here
                // Display an alert
                break;
            case 500:
                // Handle 500 here
                break;
            // and so on..
        }
        return Promise.reject(error);
    }
);

export default apiClient;
