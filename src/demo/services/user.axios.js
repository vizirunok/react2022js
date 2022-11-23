import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {},
});

export const getUsers = () => {
    return axiosInstance.get('/users');
}

export const getUser = (id) => {
    return axiosInstance.get('/users' + id);
}