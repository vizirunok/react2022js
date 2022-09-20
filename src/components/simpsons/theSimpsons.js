export default function Inform(props) {
    let {itemName, itemPicture, itemInfo} = props;
    let thisClassName = 'simps';
    return (
        <div className={thisClassName}>
            <h1>{itemName}</h1>
            <img src={itemPicture}/>
            <p>
                {itemInfo}
            </p>
        </div>
    );
}
