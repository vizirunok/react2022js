import {simpsons} from "./forSimps";
import Person from "./many";

export default function AllInfo() {
    return(
            simpsons.map((value, index) => (<Person item={value} key={index}/>))

    )
}