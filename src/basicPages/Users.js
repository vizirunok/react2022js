import {useEffect, useState} from "react";
import {User} from "./User";
import {Outlet} from "react-router-dom"

const Users = () => {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, []);

    return (
        <div>
            <Outlet/>
            {
                users.map(value => <User key={value.id} value={value}/>)
            }
        </div>
    );
};

export {Users};