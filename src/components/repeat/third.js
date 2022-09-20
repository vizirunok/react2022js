import {usersList} from "./users";
import Users from "./second";

export default function Final() {
    return(
        usersList.map(value => (<Users item={value}/>))
    )
}