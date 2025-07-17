import axios from "axios";
import API_ENDPOINTS from "./ApiConfig";

export const loginUser = async (data) =>{
    return axios.post(API_ENDPOINTS.LOGIN, data)
}

export const registerUser = async (data) => {
    return axios.post(API_ENDPOINTS.REGISTER, data)
}

export const fetchUserData = async () => {
    return axios.get(API_ENDPOINTS.USERDETAIL)
}