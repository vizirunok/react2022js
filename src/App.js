import './App.css';
import {useReducer} from "react";


const init = (initState) => {
    return {count1: initState}
};


const reducer = (state, actions) => {
    switch (actions.type) {
        case 'INC':
            return {count1: state.count1 + 1};
        case 'DEC':
            return {count1: state.count1 - 1};
        case 'RESET':
            return {count1: 0};
        case 'SET':
            return {count1: actions.payload};

    }

};


function App() {

    const [state, dispatch]  = useReducer(reducer, 0, init);

    return (
        <div>
            <h3>Count1: {state.count1}</h3>
            <button onClick={() => dispatch({type: 'INC'})}>INC</button>
            <button onClick={() => dispatch({type: 'DEC'})}>DEC</button>
            <button onClick={() => dispatch({type: 'RESET'})}>RES</button>
            <button onClick={() => dispatch({type: 'SET', payload: 150})}>SET</button>


        </div>
    );
}

export default App;
