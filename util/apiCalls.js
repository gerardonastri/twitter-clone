import axios from "axios"

const  BASE_URL = "http://twitter-clone.vercel.app/api/";

const axiosReq = axios.create({
    baseURL:  BASE_URL
})

export default axiosReq