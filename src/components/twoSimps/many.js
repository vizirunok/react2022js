export default function Person(props) {
    let {item:value}=props;
    return (
    <div>
        <h2>Name: {value.name}. Age: {value.age}</h2>
        <img src={value.photo} />
        <p>{value.info}</p>
    </div>
    )
}