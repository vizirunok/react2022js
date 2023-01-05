const User = ({user}) => {

    const {id, name, phone} = user;

    return (
        <div>
            <div>{id}. {name}</div>
            <div>Phone: {phone}</div>
        </div>
    );
};

export {User};