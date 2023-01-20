import {Count2Reducer, DEC, INC, RESET, SET} from "../reducers";

const Count2 = () => {

    const [state, dispatch] = Count2Reducer();

    return (
        <div>
            <h2>Count2: {state.count2}</h2>
            <button onClick={() => dispatch({type: INC})}>INC</button>
            <button onClick={() => dispatch({type: DEC})}>DEC</button>
            <button onClick={() => dispatch({type: SET, payload: 150})}>SET</button>
            <button onClick={() => dispatch({type: RESET})}>RESET</button>
        </div>
    )
};

export {Count2};