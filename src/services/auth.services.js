import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const _accessToken = 'access';
const _refreshToken = 'refresh';

const authServices = {
    create: (user) => axiosServices.post(urls.users, user),
    login: (user) => axiosServices.post(urls.auth, user),


    setTokens: ({access, refresh}) => {
        localStorage.setItem(_accessToken, access);
        localStorage.setItem(_refreshToken, refresh);
    },

    deleteTokens: () => {
        localStorage.removeItem(_accessToken);
        localStorage.removeItem(_refreshToken);
    },

    gerAccessToken: () => localStorage.getItem(_accessToken),
    gerRefreshToken: () => localStorage.getItem(_refreshToken),
};

export {authServices};