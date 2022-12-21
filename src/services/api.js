import axios, { AxiosResponse } from 'axios';

function createApiResult(axisReponse) {
    if (axisReponse.status == 200) {
        return {
            message: axisReponse.data.message,
            data: axisReponse.data.data,
            isError: axisReponse.status != 200,
        };
    }
    if (axisReponse.data) {
        return {
            message: axisReponse.data.message,
            data: axisReponse.data.data,
            isError: false,
        };
    }
    return {
        data: null,
        isError: true,
    };
}

function createApiResulError(error) {
    if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
            const apiResponse = error.response;
            return {
                message: apiResponse.data.message,
                data: null,
                isError: true,
            };
        } else {
            return {
                message: error.message,
                data: null,
                isError: true,
            };
        }
    }
    return {
        message: error.message,
        data: null,
        isError: true,
    };
}

export { createApiResult, createApiResulError };
