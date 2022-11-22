import {useEffect, useState} from "react";
import Actor from "./actor";

export default function RandM() {
    let [actors, setActor] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setActor(value.results.splice(0, 6))
            })
    }, []);
    return(
        <div>
            {
                actors.map(value => (<Actor value={value} key={value.id}/>))
            }
        </div>
    )
}