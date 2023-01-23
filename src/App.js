import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {RegisterPage} from "./pages";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/register'}/>}/>.
                    <Route path={'/register'} element={<RegisterPage/>}/>
                    <Route path={'/login'}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
