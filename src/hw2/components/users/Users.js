import {useEffect, useState} from "react";

import {User} from "../user/User";
import {userService} from "../../services/user.service";
import {UserDetails} from "../user-details/User.details";


export function Users() {

    let [users, setUsers] = useState([]);

    let [dop, setDop] = useState(null);

    const details = (info) => {
        return setDop(info)
    }


    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data));
    }, []);

    return(
        <div>
            <hr/>
            {
                users.map(value => (<User key={value.id} value={value} details={details}/>))
            }
            {
                dop && (<UserDetails dop={dop} key={dop.id}/>)
            }
        </div>
    )
}