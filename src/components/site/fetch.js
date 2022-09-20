import {useState} from "react";

export default function Fetch() {
    let [get, set] = useState();
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
            set(value)
        });

    return(
        <div>
            {get.map((value) => (<h2>{value.title}</h2>))
            }
        </div>
    )
}
