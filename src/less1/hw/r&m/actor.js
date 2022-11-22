export default function Actor(props) {
    let {value}=props
    return(
        <div>
        <h3>{value.id} {value.name}</h3>
        <p>Status: {value.status}</p>
        <p>Species: {value.species}</p>
        <p>Gender: {value.gender}</p>
        <img src={value.image}/>
    </div>
    )
}