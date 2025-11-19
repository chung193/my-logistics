import axios from 'axios'
import { getItem } from "@utils/localStorage"

export const apiUrl = process.env.REACT_APP_API_URL;
export const backendUrl = process.env.REACT_APP_BACKEND_URL;
export const uploadUrl = process.env.REACT_APP_BACKEND_UPLOAD_URL;

export const authInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const instance = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' }
})

authInstance.interceptors.request.use(
    (config) => {
        const access_token = JSON.parse(getItem('access_token'))
        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
