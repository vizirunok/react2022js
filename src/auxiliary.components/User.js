import {Link} from "react-router-dom";

const User = ({value}) => {

    let {id, name} = value;

    return (
        <div>
            {id} - {name} <Link to={id.toString()} state={{...value}}>details</Link>
        </div>
    )
};

export {User};