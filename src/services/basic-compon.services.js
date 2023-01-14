import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const BasicServices = {
    getAllTodos: () => axiosInstance.get(urls.todos),
    getAllAlbums: () => axiosInstance.get(urls.albums),
    getAlbumById: (id) => axiosInstance.get(`${urls.albums}/${id}`),
    getAllComments: (id) => axiosInstance.get('/comments?postId='+(id)),
};

export {BasicServices};