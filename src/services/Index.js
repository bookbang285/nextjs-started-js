import { callRequest } from "../api"
import { createApiResult, createApiResulError } from "./api"

export const IndexServices = {
    getExampleIndex,
}

async function getExampleIndex(){
    try {
        const response = await callRequest().get('/hello')
        return createApiResult(response)
    } catch (error) {
        throw createApiResulError(error)
    }
}