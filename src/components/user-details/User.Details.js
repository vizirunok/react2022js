function UserDetails({information:value}) {

    return (
        <div>
            <h3>{value.id} - {value.name}</h3>
            <p>{value.address.city}</p>
            <p>{value.email}</p>
        </div>
    );
}

export {UserDetails};