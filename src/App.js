import {useEffect, useState} from "react";

function App() {
    let [users, setUsers] = useState([]);
    useEffect(() =>
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
        ,[])
    return(
    <div>
        {
            console.log(users)
        }
    </div>
)}

export default App;
