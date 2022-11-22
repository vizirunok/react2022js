import {useEffect, useState} from "@types/react";
import {getUsers} from "./userService";
import UserComponent from "../components/UserComponent";

let [users, setUsers] = useState([]);
useEffect(() => {
    getUsers().then(value => setUsers(value.data));
},[])
return (
    <div>
        {users.map(value => <UserComponent key={value.id} item={value}/>)}
    </div>
);