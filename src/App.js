import {useEffect, useState} from "react";
import {getUsers} from "./hw2/services/axios.JSONPLACE";
import {User} from "./hw2/components/User";

function App() {

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
export default App;

// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)
//
//
//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
