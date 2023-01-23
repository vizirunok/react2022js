import {axiosService} from "./services/axios.service";
import {urls} from "./configs";

const _accessTokenKey = 'access';
const _rafreshTokenKey = 'refresh';

const wwwwwwwww = {
    register: (user) => axiosService.post(urls.users, user),
    login: (user) => axiosService.post(urls.auth.login, user),
    refresh: (token) => axiosService.post(urls.auth.refresh, {token}),


    setTokens: ({access, refresh}) => {
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_rafreshTokenKey, refresh);
    },

    deleteToken: () => {
        localStorage.removeItem(_accessTokenKey);
        localStorage.removeItem(_rafreshTokenKey);
    },

    getAccessToken: () => {
        localStorage.getItem(_accessTokenKey);
    },

    getRefreshToken: () => {
        localStorage.getItem(_rafreshTokenKey);
    }
};

export {wwwwwwwww};