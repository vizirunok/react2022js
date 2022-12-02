import {axiosInstance} from "./axios.JSONPLACE";
import {urls} from "../configs";

const userService={
    getAll: () => {
        axiosInstance.get(urls.users);
    }
}