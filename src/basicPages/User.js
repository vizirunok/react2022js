import {Link} from "react-router-dom";

const User = ({value}) => {

    let {id, name, phone} = value;

    return (
        <div>
            <div>
                <h4>{id} - {name}</h4>
                <p>{phone}</p>
                <Link to={id.toString()} state={{...value}}>User Details</Link>
            </div>
            <hr/>
            <div>
                <Link to={'/users/v2/' + id}>User details.v2</Link>
            </div>
        </div>
    )
};

export {User};