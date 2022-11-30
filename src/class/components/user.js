export default function User({value, stateLift}) {
    return (
        <div>
            <h2>{value.id} - {value.name}</h2>
            <p>{value.address.street}</p>
            <p>{value.email}</p>
            <button onClick={() => stateLift(value)}>details</button>
        </div>
    );
}