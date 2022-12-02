import {useEffect, useState} from "react";
import {UsersServices} from "../../services";
import {User} from "../user/User";
import {UserDetails} from "../user-details/User.Details";

function Users() {

    let [users, setUsers] = useState([]);
    let [information, setInformation] = useState(null);

    let choseUser = (obj) => {
        setInformation(obj);
    };

    useEffect(() => {
        UsersServices.getAll().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            <div>
                {
                    information && (<UserDetails key={information.id} information={information}/>)
                }
            </div>
            <hr/>
            {
                users.map(value => (<User key={value.id} value={value} choseUser={choseUser}/>))
            }
        </div>
    );
}



export {Users};

// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)