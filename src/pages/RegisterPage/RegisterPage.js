import {useForm} from "react-hook-form";

const RegisterPage = () => {


    const {handleSubmit, register, formState:{isValid}} = useForm({mode:'all'});

    return (
        <div>

        </div>
    )
};

export {RegisterPage};