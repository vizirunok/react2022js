import {useLocation} from "react-router-dom";

const UserDetails = () => {

    let location = useLocation();

    let {state:userDetails} = location;

    console.log(userDetails);

    return (
        <div>
            <h2>Details about user</h2>
            {
                JSON.stringify(userDetails)
            }
        </div>
    )
};
export {UserDetails};