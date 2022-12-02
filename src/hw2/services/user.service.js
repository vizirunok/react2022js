import {axiosInstance} from "./axios.JSONPLACE";
import {urls} from "../configs";

const infoUsers={
    getAll:()=>{
        axiosInstance.get(urls.users);}
}