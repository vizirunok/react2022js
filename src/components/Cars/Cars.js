import {useEffect, useState} from "react";

import {CarService} from "../../services/car.service";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";


const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarService.getAll().then(({data}) => setCars(data))
    }, [])

    const updateCar = (object) => object;

    return (
        <div>
            <CarForm setCars={setCars} updateCar={updateCar}/>
            <hr/>
            {
                cars.map(car => (<Car key={car.id} car={car} setCars={setCars} updateCar={updateCar}/>))
            }
        </div>
    );
};

export {Cars};