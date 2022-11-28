export default function UserComponent({item, choseUser}) {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={()=>{choseUser(item.id)}}>details</button>
        </div>
    );
}

























// export default function UserComponent({item, choseUser}) {
//     return(
//         <div>
//             <h2>{item.id} {item.name}</h2>
//             <button onClick={() => {
//                 choseUser(item.id)
//             }}>details</button>
//         </div>
//     )
// }