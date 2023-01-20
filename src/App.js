import './App.css';
import {useReducer} from "react";


const init = (initialValue) => {
    return {counter1: initialValue, counter2: initialValue}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return {...state, counter1: state.counter1 + 1}
        case 'DEC':
            return {...state, counter1: state.counter1 - 1}
        case 'SET':
            return {...state, counter1: action.payload}
        case 'RES':
            return {...state, counter1: 0}
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            <h2>Counter1: {state.counter1}</h2>
            <h2>Counter2: {state.counter2}</h2>
            <button onClick={() => dispatch({type: 'INC'})}>INC</button>
            <button onClick={() => dispatch({type: 'DEC'})}>DEC</button>
            <button onClick={() => dispatch({type: 'SET', payload: 200})}>SET</button>
            <button onClick={() => dispatch({type: 'RES'})}>RES</button>
        </div>
    );
}

export default App;
