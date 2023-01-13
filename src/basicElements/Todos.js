import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {axiosInstance, BasicServices} from "../services";

const Todos = () => {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        BasicServices.getAllTodos().then(({data}) => setTodos(data))
    }, []);

    return(
        <div>
            {

            }
        </div>
    )
};

export {Todos};