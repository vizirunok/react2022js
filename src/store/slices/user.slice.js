import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Ira'}
    ]
};  

const userSlice = createSlice({
    name: 'userSlice',
    initialState
});

const userReducer = userSlice.reducer;

export {userReducer};

