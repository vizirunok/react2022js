import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const UserDetails = () => {

    let {state} = useLocation();

    return (
        <div>
            {
                JSON.stringify(state)
            }
        </div>
    )
};

export {UserDetails};