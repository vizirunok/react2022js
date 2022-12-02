import {axiosInstance} from "./axios.JSONPLACE";
import {urls} from "../configs";


const userService = () => {
    return axiosInstance.get(urls.users)
};

export {userService};