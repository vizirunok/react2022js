import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {BasicServices} from "../services";
import {Todo} from "../auxiliary.components";


const Todos = () => {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        BasicServices.getAllTodos().then(({data}) => setTodos(data))
    }, []);

    return(
        <div>
            <Outlet/>
            {
                todos.map(value => <Todo key={value.id} value={value}/>)
            }
            <hr/>

        </div>
    )
};

export {Todos};