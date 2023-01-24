import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./MainLayout";
import {CarPage, Login, Register} from "./Pages";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/register'}/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/cars'} element={<CarPage/>}/>
                    <Route/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
