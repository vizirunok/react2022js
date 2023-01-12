import {Link} from "react-router-dom";

const Post = ({value}) => {

    let {title, body} = value;

    return (
        <div>
            <Link to={value.id.toString()}><h3>{title}</h3></Link>
        </div>
    );
};

export {Post};
