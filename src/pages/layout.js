import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ul>
            Layout
            <Outlet/>
        </div>
    );
};

export {Layout};