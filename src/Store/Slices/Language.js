import {createSlice} from '@reduxjs/toolkit'

 const languageSlice=createSlice({
    name:'languages',
    initialState:{language:'En'},
    reducers:{
        chaneLanguages:function(state,action){
            state.language=action.payload
        }
    }
})
export const {chaneLanguages}=languageSlice.actions
export default languageSlice.reducer
