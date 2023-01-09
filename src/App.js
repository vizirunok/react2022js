import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {About, Home, Layout} from "./basic.components";
import {Users, Posts, Comments} from "./layout.components";
import {UserDetails, PostDetails} from "./auxiliary.components";


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
                <h2>content</h2>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'/layout'} element={<Layout/>}>
                        <Route path={'users'} element={<Users/>}>
                            <Route path={':id'} element={<UserDetails/>}/>
                        </Route>
                        <Route path={'posts'} element={<Posts/>}>
                            <Route path={':id'} element={<PostDetails/>}/>
                        </Route>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
