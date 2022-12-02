import {useEffect, useState} from "react";
import {axiosInstance} from "../../services";
import {Rocket} from "../rocket/Rocket";

function SpaceX() {

    let [mask, setMask] = useState([]);

    useEffect(() => {
        axiosInstance().then(value => setMask(value.data.splice(0,5)))
    }, []);


    return (
        <div>
            {
                mask.map((value,index) => (<Rocket key={index} value={value}/>))
            }
        </div>
    )
}

export {SpaceX};