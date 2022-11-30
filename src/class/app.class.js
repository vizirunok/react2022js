import {useEffect, useState} from "react";
import User from "./class/components/user";
import {UserApiService} from "./class/services/user.api.service";
import {getUsersAxios} from "./class/services/user.api.axios";

function App() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const stateLift = (id) => {
        return setUser(id)
    }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => setUsers(value))
    // },[])

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    },[])

    return (
        <div>
            <h2>app component header</h2>
            <hr/>
            {/*{user && <div>{JSON.stringify(user)}</div>}*/}
            {/*{user? <div>yes</div>:<div>other</div>}*/}
            {/*{JSON.stringify(user)}*/}
            <h3>{user?.username}</h3>

            <hr/>
            {
                users.map(value => (<User key={value.id} value={value} stateLift={stateLift}/>))
            }
        </div>
    );
}
export default App;
