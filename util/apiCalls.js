import axios from "axios"

const  BASE_URL = "https://twitter-clone-flax-eight.vercel.app/api/";

const axiosReq = axios.create({
    baseURL:  BASE_URL
})

export default axiosReq