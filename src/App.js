import './App.css';
import {Link, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <div>
                <h2>Menu</h2>
                <ol>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/layout'}>layout</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                </ol>
            </div>
            <div>
                <Routes>

                </Routes>
            </div>
        </div>
    );
}

export default App;
