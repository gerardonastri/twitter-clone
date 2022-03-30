import axios from "axios"

const  BASE_URL = "http://localhost:3000/api/";

const axiosReq = axios.create({
    baseURL:  BASE_URL
})

export default axiosReq