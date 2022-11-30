import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {},
});

const getUsers = () => {
    return axiosInstance.get();
}

export {getUsers};