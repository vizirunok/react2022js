export default function Users(props) {
    let {item: value}=props;
    return (
        <div>
            <h2>{value.name}</h2>
            <p>{value.email}</p>
            <p>{value.phone} {value.address.city}</p>
        </div>
    )
}