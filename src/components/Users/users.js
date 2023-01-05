import {useEffect, useState} from "react";

import {UserServices} from "../../services";
import {User} from "../User/user";
import {UserForm} from "../UserForm/UserForm";



const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserServices.getAll().then(({data}) => setUsers(data));
    }, [])

    return (
        <div>
            <UserForm/>
            <hr/>
            {
                users.map(user => (<User key={user.id} user={user} setUsers={setUsers}/>))
            }
        </div>
    );
};

export {Users};