import axios from "axios";

let axiosInstance= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {},
});

const getUsersAxios = () => {
    return axiosInstance.get()
}

const getUserAxios = (id) => {
    return axiosInstance.get('/'+id)
}

export {getUsersAxios, getUserAxios};
