import {useEffect, useState} from "react";
import {getUser, getUsers} from "./demo/services/user.axios";
import UserComponent from "./demo/components/UserComponent";

function App() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    },[])

    const choseUser = (id) => {
        getUser(id).then(value => console.log(value))
    }

    return(
        <div>
            {
                users.map(value => (<UserComponent choseUser={choseUser} item={value} key={value.id}/>))
            }
        </div>
    )}

export default App;
