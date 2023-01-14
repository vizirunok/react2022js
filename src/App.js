import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Albums, Comments, Todos} from "./basicElements";
import {TodoDetails} from "./auxiliary.components/TodoDetails";
import {AlbumDetails} from "./auxiliary.components/AlbumDetails";

function App() {

    return (
        <div>
            <div>
                <h3>menu</h3>
                <ol>
                    <li><Link to={'todos'}>Todos</Link></li>
                    <li><Link to={'albums'}>Albums</Link></li>
                    <li><Link to={'comments'}>Comments</Link></li>
                </ol>
            </div>
            <div>
                <h4>content</h4>
                <Routes>
                    <Route path={'todos'} element={<Todos/>}>
                        <Route path={':id'} element={<TodoDetails/>}/>
                    </Route>
                    <Route path={'albums'} element={<Albums/>}>
                        <Route path={':id'} element={<AlbumDetails/>}/>
                    </Route>
                    <Route path={'comments'} element={<Comments/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.
