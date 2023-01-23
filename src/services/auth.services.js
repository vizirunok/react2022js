import {axiosService} from "./axios.service";
import {urls} from "../configs";

const authServices = {
    register: (user) => axiosService.post(urls.users, user),
    login: (user) => axiosService.post(urls.auth.login, user),
    refresh: (token) => axiosService.post(urls.auth.refresh, {token})
};

export {authServices};