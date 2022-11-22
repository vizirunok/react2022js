import {useEffect} from "react";
import {getUsers} from "./lesson2/services/user.axios";


function App() {
    useEffect(() => {
        getUsers().then(value => console.log(value.data))
    },[])
    return(
    <div>
        {

        }
    </div>
)}

export default App;
