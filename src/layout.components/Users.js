import {useEffect, useState} from "react";
import {ApiService} from "../services";
import {User} from "../auxiliary.components";

const Users = () => {

    let [users, setUsers] = useState([]);

    let apiService = new ApiService('users');

    useEffect(() => {
        apiService.getAll().then(value => setUsers(value));
    }, []);

    return (
        <div>
            {
                users.map(value => <User value={value} key={value.id}/> )
            }
        </div>
    )
};
export {Users};