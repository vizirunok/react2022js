import {useNavigate} from "react-router-dom";

import css from "./Header.module.css"

const Headers = () => {

    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <button className={css.btns} onClick={()=>navigate('/login')}>Login</button>
            <button className={css.btns} onClick={()=>navigate('/register')}>Register</button>
        </div>
    );
};

export {Headers};