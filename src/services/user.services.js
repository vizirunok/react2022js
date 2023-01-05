import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const UserServices = {
    getAll: () => axiosInstance.get(urls.users),
    getById: (id) => axiosInstance.get(`${urls.users}/${id}`),
    updateById: (id, user) => axiosInstance.put(`${urls.users}/${id}`, user),
    deleteById: (id) => axiosInstance.delete(`${urls.users}/${id}`),
    create: (user) => axiosInstance.post(urls.users, {user}),
};

export {UserServices};

// import axios from "axios";
//
// let axiosInstance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/posts',
//     headers: {'Content-type': 'application/json; charset=UTF-8'},
// });
//
// const postUser = (data) =>
//     axiosInstance.post('', {data});
//
//
// export {postUser};
