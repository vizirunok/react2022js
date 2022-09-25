export default function UserComponent({item}) {
    return(
        <div>
            <h2>{item.id} {item.name}</h2>
            <button>details</button>
        </div>
    )
}