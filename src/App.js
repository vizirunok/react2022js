
import {getUsers} from "./services/userService";
import {useEffect} from "react";


function App() {
  useEffect(() => {
    getUsers().then(value => console.log(value));
  },[])
  return (
    <div>

    </div>
  );
}
export default App;
