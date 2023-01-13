import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const BasicServices = {
    getAllTodos: () => axiosInstance.get(urls.todos),
    getAllAlbums: () => axiosInstance.get(urls.albums),
    getAllComments: () => axiosInstance.get(urls.comments),
};

export {BasicServices};