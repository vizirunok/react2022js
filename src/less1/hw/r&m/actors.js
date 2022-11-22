import {useEffect, useState} from "react";
import Actor from "./actor";
import getActors from "../services/r&mSrvices";

export default function RandM() {
    let [actors, setActor] = useState([]);
    useEffect(() => {
            getActors().then(value => {
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