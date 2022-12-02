import {useEffect, useState} from "react";
import {UsersServices} from "../../services";

function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        UsersServices.getAll().then(({data}) => setUsers({data}));
    }, []);

    return (
        <div>

        </div>
    )
}

export {Users};

