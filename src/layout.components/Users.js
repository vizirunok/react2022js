import {useEffect, useState} from "react";
import {ApiService} from "../services";
import {Outlet} from "react-router-dom";

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
            <hr/>
            <Outlet/>
        </div>
    )
};
export {Users};