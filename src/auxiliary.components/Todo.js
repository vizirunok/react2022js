import {useNavigate} from "react-router-dom";

const Todo = ({value}) => {

    let {id, title} = value;

    let navigate = useNavigate();

    return (
        <div>
            <h2>id:{id}. Title:{title}</h2>
            <button onClick={() => navigate(id.toString())} state={{...value}}>Todo details</button>
        </div>
    );
};

export {Todo};