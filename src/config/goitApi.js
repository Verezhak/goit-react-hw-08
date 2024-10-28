import axios from "axios";

// export const goitApi = axios.create({
//     baseURL: 'https://connections-api.goit.global/',
// })
// export const goitApi = axios.create({
//     baseURL: 'https://nodejs-hw-mongodb-ztyo.onrender.com',
// })

export const goitApi = axios.create({
    baseURL: 'http://localhost:3000',
})
export const setAuthHeader = (token) => {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const clearAuthHeader = () => {
    goitApi.defaults.headers.common.Authorization = '';
};