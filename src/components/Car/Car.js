import {CarService} from "../../services/car.service";

const Car = ({car,setCars}) => {

    const {id, model, price, year} = car;

    const kill = async () => {
        await CarService.deleteById(id);
        setCars(cars => {
            const index = cars.findIndex(value => value.id = id);
            cars.splice(index, 1);
            return [...cars];
        });
    };

    const change = () => {

    };

    return (
        <div>
            <div>
                <div>id:{id}</div>
                <div>model:{model}</div>
                <div>year:{year}</div>
                <div>price:{price}</div>
            </div>
            <div>
                <button onClick={() => change()}>Update</button>
                <button onClick={() => kill()}>Delete</button>
            </div>
        </div>);
};

export {Car};