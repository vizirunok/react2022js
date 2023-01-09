import {useNavigate} from "react-router-dom";

const PostComponent = ({item}) => {

    let {title, id} = item;

    let navigator = useNavigate()

    return (
        <div>
            {title}
            <button onClick={() => navigator(id.toString())}>Click Me!</button>
        </div>
    )
};
export {PostComponent};