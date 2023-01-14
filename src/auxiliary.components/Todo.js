import {Link} from "react-router-dom";

const Todo = ({value}) => {

    let {id, title} = value;


    return (
        <div>
            <h2>id:{id}. Title:{title}</h2>
            <Link to={id.toString()} state={{...value}}>Todo details</Link>
        </div>
    );
};

export {Todo};