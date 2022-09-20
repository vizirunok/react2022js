import {Array} from "./bd";
import ForPerson from "./first";

export default function RM() {
    return(
        <div>
        {Array.map((value, index) => (<ForPerson item={value} key={index}/>))}
        </div>
    )

}