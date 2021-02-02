import axios from "axios"
import {Loading, ActivityIndicator} from "zarm"

const service = axios.create({
    baseURL: '/api',
    timeout: 3000,
    withCredentials: true
})

service.interceptors.request.use(
    config => {
        Loading.show({
            content: <ActivityIndicator size="lg"/>
        })
        return config
    },
    error => {
        Loading.hide()
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        Loading.hide()
        return response
    },
    error => {
        Loading.hide()
        return Promise.reject(error)
    }
)

export default service
