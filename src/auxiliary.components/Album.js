import {useNavigate} from "react-router-dom";

const Album = ({value}) => {

    let {id, title} = value;

    let navigate = useNavigate();

    return (
        <div>
            {id} - {title}
            <button onClick={() => navigate(id.toString())}>Album Details</button>
        </div>
    );
};

export {Album};