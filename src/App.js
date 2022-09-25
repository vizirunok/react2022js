import {useEffect} from "@types/react";
import {getUsers} from "./services/userService";


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
