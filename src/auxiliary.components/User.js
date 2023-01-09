const User = ({value}) => {

    let {id, name} = value;

    return (
        <div>
            {id} - {name}
        </div>
    )
};
export {User};