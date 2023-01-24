import {useReducer} from "react";
import {DEC, INC, RESET, SET} from "./actions.reducer";


const reducer = (state, action) => {
    switch (action.type) {
        case INC:
            return {count1: state.count1 + 1}
        case DEC:
            return {count1: state.count1 - 1}
        case SET:
            return {count1: action.payload}
        case RESET:
            return {count1: 0}
    }
};

const Count1Reducer = () => useReducer(reducer, {count1: 0});

export {Count1Reducer};