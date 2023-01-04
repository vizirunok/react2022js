import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const CarService = {
    getAll: () => axiosInstance.get(urls.cars),
    getById: (id) => axiosInstance.get(`${urls.cars}/${id}`),
    deleteById: (id) => axiosInstance.delete(`${urls.cars}/${id}`),
    create: (car) => axiosInstance.post(urls.cars, car),
    updateById: (id, car) => axiosInstance.put(`${urls.cars}/${id}`, car),
};

export {CarService};