import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const UserServices = {
    getAll: () => axiosInstance.get(urls.users),
    getById: (id) => axiosInstance.get(`${urls.users}/${id}`),
    updateById: (id, user) => axiosInstance.put(`${urls.users}/${id}`, user),
    deleteById: (id) => axiosInstance.delete(`${urls.users}/${id}`),
    create: (data) => axiosInstance.post(urls.users, data),
};

export {UserServices};
