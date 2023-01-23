import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {joiValidator} from "../../validator";

const RegisterPage = () => {


    const {handleSubmit, register, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(joiValidator),
        mode: 'all'});


    const submit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'login'} {...register('login')}/>
            {errors.login && <span>{JSON.stringify(errors.login.message)}</span>}
            <input type="text" placeholder={'password'} {...register('password')}/>
            {errors.password && <span>{JSON.stringify(errors.password.message)}</span>}
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {RegisterPage};