let _url = "https://jsonplaceholder.typicode.com/users";

const UserApiService = () => {
   return fetch(_url)
        .then(value => value.json());
};

const getUser = (id) => {
    return fetch(_url + '/' + id)
        .then(value => value.json());}

export {UserApiService, getUser}