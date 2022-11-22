import {useState} from "react";
import {useEffect} from "react";

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
            {set.map(value => <div>{value.name}</div>)}
        </div>
    );
}
export default App;
