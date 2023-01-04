import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './form.module.css';
import {CarValidator} from "../../validators";
import {CarService} from "../../services/car.service";
import {useEffect} from "react";


const CarForm = ({setCars}) => {

    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(CarValidator),
        mode: 'all'
    });

    const submit = async (car) => {
        const {data} = await CarService.create(car);
        setCars(cars => [...cars, data]);
        reset();
    };

    useEffect(() => {
        setValue('model','')
        setValue('price','')
        setValue('year','')
    }, []);

    return (
        <form className={css.Car} onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CarForm};