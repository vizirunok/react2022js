import {useEffect, useState} from "react";
import {getUser, getUsers} from "./demo/services/user.axios";
import UserComponent from "./demo/components/UserComponent";

function App() {
    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState([null]);
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, []);

    const choseUser = (id) => {
        getUser(id).then(value => setChosenUser(value.data))
    }
    return (
        <div>
            <div>{chosenUser?.name}</div>
            <hr/>
            {
                users.map(value => (
                    <UserComponent
                        item={value}
                        key={value.id}
                        choseUser={choseUser}
                    />))
            }
        </div>
    );
}
export default App;
