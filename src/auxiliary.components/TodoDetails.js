import {useLocation} from "react-router-dom";

const TodoDetails = () => {

    let location = useLocation();
    let {state} = location;

    return (
        <div>
            {
                JSON.stringify(state)
            }
        </div>
    )
};

export {TodoDetails};