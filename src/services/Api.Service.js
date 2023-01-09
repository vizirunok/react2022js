function ApiService(endpoint) {

    this.getAll = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(value => value.json());

    this.getElByID = (id) => fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
        .then(value => value.json());
}

export {ApiService};