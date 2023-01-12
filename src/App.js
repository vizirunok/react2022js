import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "./basicPages/Home";
import {Users} from "./basicPages/Users";
import {Posts} from "./basicPages/Posts";
import {UserDetails} from "./basicPages/UserDetails";
import {UserDetailsV2} from "./basicPages/UserDetailsV2";

function App() {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to={'/'}>Home page</Link></li>
                    <li><Link to={'/users'}>All users</Link></li>
                    <li><Link to={'/posts'}>All posts</Link></li>
                </ul>
            </div>
            <hr/>
            <div>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'users/:id'} element={<UserDetails/>}/>
                    <Route path={'users/v2/:id'} element={<UserDetailsV2/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                </Routes>
            </div>
            <hr/>
        </div>
    );
}

export default App;
