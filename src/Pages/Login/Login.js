import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authServices} from "../../services";

const Login = () => {

    const {register, handleSubmit} = useForm();

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const submit = async (user) => {
        try {
            const {data}=await authServices.login(user);
            authServices.setTokens(data)
            navigate('/cars');
        }
        catch (e) {
            setErrors(e.response.data)
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            {errors && <span>{JSON.stringify(errors)}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    );
};

export {Login};