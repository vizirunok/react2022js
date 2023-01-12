import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const UserDetailsV2 = () => {

    let {id} = useParams();

    let [user, setUser] = useState([]);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(value => value.json())
        .then(value => setUser({...value}))

    return (
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    )
};

export {UserDetailsV2};