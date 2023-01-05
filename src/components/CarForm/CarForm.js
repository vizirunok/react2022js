import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './form.module.css';
import {CarValidator} from "../../validators";
import {CarService} from "../../services/car.service";
import {useEffect} from "react";
import {Car} from "../Car/Car";


const CarForm = ({setCars, CarForUpdate, setCarForUpdate}) => {

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
        if (CarForUpdate) {
            setValue('model', CarForUpdate.model, {shouldValidate: true})
            setValue('price', CarForUpdate.price, {shouldValidate: true})
            setValue('year', CarForUpdate.year, {shouldValidate: true})
        }
    }, [CarForUpdate]);

    return (
        <form className={css.Car} onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{setCarForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};