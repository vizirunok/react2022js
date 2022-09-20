export default function ForPerson(props) {
    let {item:value}=props;
    return(
       <div>
           <h2>{value.id} {value.name}</h2>
           <p>Status: {value.status}</p>
           <p>Species: {value.species}</p>
           <p>Gender: {value.gender}</p>
           <img src={value.image}/>
       </div>
   )
}
