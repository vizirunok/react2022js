export function Item(props) {
    let {value} = props;
    return(
        <div>
            <h3>{value.name} {value.surname}</h3>
            <h3>Age: {value.age}</h3>
            <img src={value.photo}/>
            <p>{value.info}</p>
        </div>
    )
}