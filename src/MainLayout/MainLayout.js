import {Outlet} from "react-router-dom";

import {Headers} from "../components/Headers";


const MainLayout = () => {


    return (
        <div>
            <Headers/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};