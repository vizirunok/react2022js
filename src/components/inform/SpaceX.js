import {useEffect, useState} from "react";
import {axiosInstance} from "../../services";

function SpaceX() {

    // let [mask, setMask] = useState([]);

    useEffect(() => {
        axiosInstance().then(value => console.log(value))
    }, []);


    return (
        <div>

        </div>
    )
}

export {SpaceX};