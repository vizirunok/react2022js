import './App.css';
import {Link, useRoutes} from "react-router-dom";
import {Layout} from "./pages/layout";
import {Users} from "./pages/Users";
import {Posts} from "./pages/Posts";
import {UserDetails} from "./pages/UserDetails";

function App() {

    let routes = [
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: 'users',
                    element: <Users/>,
                    children: [
                        {
                            path: ':id',
                            element: <UserDetails/>,
                        }
                    ]
                },
                {path: 'posts', element: <Posts/>}
            ]
        }
    ];

    let element = useRoutes(routes);


    return (
        <div>
            {element}
        </div>
    );
}

export default App;
