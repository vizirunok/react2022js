import {useEffect, useState} from "react";
import {getUsers} from "../services/axios.JSONPLACE";
import {User} from "./User";

export function Users() {

    let [users, setUsers] = useState([]);

    let [dop, setDop] = useState(null);

    const details = (info) => {
        return setDop(info)
    }

    useEffect(() => {
        getUsers().then(({data}) => setUsers(data))
    }, []);

    return(
        <div>
            <hr/>
            {
                users.map(value => (<User key={value.id} value={value} details={details}/>))
            }
            {
                dop && (<div>{dop.name}</div>)
            }
        </div>
    )
}