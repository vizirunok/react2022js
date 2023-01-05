import {CarService} from "../../services/car.service";

const Car = ({car,setCars,setCarForUpdate}) => {

    const {id, model, price, year} = car;

    const kill = async () => {
        await CarService.deleteById(id);
        setCars(cars => {
            const index = cars.findIndex(value => value.id = id);
            cars.splice(index, 1);
            return [...cars];
        });
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
                <button onClick={() => setCarForUpdate(car)}>Update</button>
                <button onClick={() => kill()}>Delete</button>
            </div>
        </div>);
};

export {Car};