import './App.css';
import {Items} from "./less1/hw/simpsons/items";
import RandM from "./less1/hw/r&m/actors";


function App() {
    return (
        <div>
            <Items/>
            <RandM/>
        </div>
    );
}

export default App;

// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів
