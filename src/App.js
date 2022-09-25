import {getUsers} from "./services/userService";
import {useEffect, useState} from "react";

import UserComponent from "./components/UserComponent";

function App() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(value => setUsers(value.data));
  },[])
  return (
    <div>
      {users.map(value => <UserComponent key={value.id} item={value}/>)}
    </div>
  );
}
export default App;
