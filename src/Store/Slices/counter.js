import { createSlice } from "@reduxjs/toolkit";

const  counterSlice=createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{
        increaseCounter:function(state,action){
            state.counter=state.counter+1
        },
        deccreaseCounter:function(state,action){
            state.counter=state.counter-1
        },
    }
})
 export const {increaseCounter,deccreaseCounter}=counterSlice.actions
export default counterSlice.reducer