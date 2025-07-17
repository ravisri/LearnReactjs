const BASE_URL = 'http://localhost:5000'

const API_ENDPOINTS = {
    LOGIN:`${BASE_URL}/api/user/login`,
    REGISTER:`${BASE_URL}/api/user/register`,
    USERDETAIL:`${BASE_URL}/api/user/me`
}

export default API_ENDPOINTS;