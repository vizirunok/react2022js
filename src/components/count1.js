import {Count1Reducer, DEC, INC, RESET, SET} from "../reducers";

const Count1 = () => {

    const [state, dispatch] = Count1Reducer();

    return (
        <div>
            <h2>Count1: {state.count1}</h2>
            <button onClick={()=>dispatch({type:INC})}>INC</button>
            <button onClick={()=>dispatch({type:DEC})}>DEC</button>
            <button onClick={()=>dispatch({type:SET, payload:150})}>SET</button>
            <button onClick={()=>dispatch({type:RESET})}>RESET</button>
        </div>
    )
};

export {Count1};