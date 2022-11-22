import {useState} from "react";
import {useEffect} from "@types/react";

function App() {
  let [set, getSet] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
          getSet(value);})
  },[])
    return (
        <div>
            {console.log(set)}
        </div>
    );
}
export default App;
