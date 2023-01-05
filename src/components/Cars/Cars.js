import {useEffect, useState} from "react";

import {CarService} from "../../services/car.service";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";


const Cars = () => {

    const [cars, setCars] = useState([]);

    const [CarForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        CarService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            <CarForm setCars={setCars} CarForUpdate={CarForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {
                cars.map(car => (<Car key={car.id} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}/>))
            }
        </div>
    );
};

export {Cars};