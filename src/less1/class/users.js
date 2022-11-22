import User from "./user";
import {useState} from "react";

export default function Users() {
    let [info, setInfo] = useState([]);
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setInfo(value);})
    return(
        <div>
            {info.map((user,index) => (<User item={user} key={index}/>))}
        </div>
    )
}