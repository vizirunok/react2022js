import {axiosInstance} from "./axios.services";
import {urls} from "../configs";

const UsersServices = {
    getAll: () => {
        axiosInstance.get(urls.users);
    }
};

export {UsersServices};