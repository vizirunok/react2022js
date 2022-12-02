function User({value, choseUser}) {

    return (
        <div>
            <h3>{value.id} - {value.name}</h3>
            <p>{value.address.city}</p>
            <p>{value.email}</p>
            <button onClick={() => {
                choseUser(value);
            }}>Click Me!</button>
        </div>
    );
}

export {User};