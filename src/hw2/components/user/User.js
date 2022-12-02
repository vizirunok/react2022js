export function User({value, details}) {
    return (
        <div>
            <h4>{value.id} - {value.name}</h4>
            <p>Username: {value.username}</p>
            <p>Phone: {value.phone}</p>
            <button onClick={()=>{details(value)}}>Details</button>
        </div>
    )
}