
import {baseURL} from "../configs";
import axios from "axios";

const axiosInstance = axios.create({baseURL});

export {axiosInstance};