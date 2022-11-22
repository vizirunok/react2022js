import {simpsons} from "./base";
import {Item} from "./item";

export function Items() {
    return(
        <div>
            {simpsons.map((value,index) => (<Item key={index} value={value}/>))}
        </div>
    )
}