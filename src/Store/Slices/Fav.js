import {  createSlice } from "@reduxjs/toolkit";


export const favroitesSlice=createSlice({
    name:'favroites',
    initialState:[],
    reducers:{
addFavMovies:function(state,action){
state.push(action.payload)
},
removFavMovies:function(state,action){
   
        return state.filter((movie)=>movie.id!=action.payload.id)
    }
}
})

export const {addFavMovies,removFavMovies}=favroitesSlice.actions
export default favroitesSlice.reducer
