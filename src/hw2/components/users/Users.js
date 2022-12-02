import {useEffect, useState} from "react";

import {User} from "../user/User";
import {userService} from "../../services/user.service";


export function Users() {

    let [users, setUsers] = useState([]);

    // let [dop, setDop] = useState(null);
    //
    // const details = (info) => {
    //     return setDop(info)
    // }


    useEffect(() => {
        userService.getAll().then(value => console.log(value.data));
    }, []);

    return(
        <div>
            <hr/>
            {/*{*/}
            {/*    users.map(value => (<User key={value.id} value={value} details={details}/>))*/}
            {/*}*/}
            {/*{*/}
            {/*    dop && (<div>{dop.name}</div>)*/}
            {/*}*/}
        </div>
    )
}