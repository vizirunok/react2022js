import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {UserValidator} from "../../validators";
import {UserServices} from "../../services";


const UserForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(UserValidator),
        mode: 'all'});


    const onSubmit = (item) => {
        UserServices.create(item).then(value => console.log(value));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'phone'} {...register('phone')}/>
            {errors.phone && <span>{errors.phone.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {UserForm};