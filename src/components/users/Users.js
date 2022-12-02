import {useEffect, useState} from "react";
import {UsersServices} from "../../services";
import {User} from "../user/User";

function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        UsersServices.getAll().then(value => setUsers(value.data));
    }, []);

    return(
        <div>
            {
                users.map(value => (<User key={value.id} value={value}/>))
            }
        </div>
    )
}



export {Users};

// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)