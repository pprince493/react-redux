import { createSlice } from "@reduxjs/toolkit";

export const incdeslice =createSlice({
    name: 'incdec' ,
    initialState: 10,
    reducers: {
        Inc: (state, action) =>{
            return state += action.payload;
        },
        Dec: (state, action) =>{
            return state -= action.payload;
        },

    }
})

export const{Inc, Dec} = incdeslice.actions;
export default incdeslice.reducer;