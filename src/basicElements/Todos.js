import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import {axiosInstance, BasicServices} from "../services";
import {Todo} from "../auxiliary.components";


const Todos = () => {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        BasicServices.getAllTodos().then(({data}) => setTodos(data))
    }, []);

    return(
        <div>
            {
                todos.map(value => <Todo key={value.id} value={value}/>)
            }
        </div>
    )
};

export {Todos};