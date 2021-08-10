import axios from 'axios'
import { Message } from 'element-ui'



const http = axios.create({
    baseURL:'http://60.205.188.54:3000/user'
})


//请求拦截
http.interceptors.request.use( config => {
    if(localStorage.token){
        config.headers.Authorization = localStorage.token
    }

    return config
})

//响应拦截



export default http