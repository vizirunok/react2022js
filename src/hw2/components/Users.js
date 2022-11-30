import {useEffect, useState} from "@types/react";
import {getUsers} from "../services/axios.JSONPLACE";
import {User} from "./User";

function Users() {

    let [users, setUsers] = useState([]);
    let [dop, setDop] = useState([]);

    const details = (info) => {
        return setDop(info)
    }

    useEffect(() => {
        getUsers().then(({data}) => setUsers(data))
    }, []);

    return(
        <div>
            <p>{dop}</p>
            <hr/>
            {
                users.map(value => (<User key={value.id} value={value} details={details}/>))
            }
        </div>
    )
}
export default Users;