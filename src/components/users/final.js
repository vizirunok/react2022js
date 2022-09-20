import {users} from "./data";
import User from "./User";

export default function Gray()
{
    return(
    users.map((user, index) =>(<User item={user} key={index}/>))
    )
}