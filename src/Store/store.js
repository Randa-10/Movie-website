import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./Slices/Language";
import counterReducer from "./Slices/counter";
import loaderReducer from "./Slices/loader";
import favroitesReducer from './Slices/Fav'
export const store=configureStore({
    reducer:{
        language:LanguageReducer,
        counter:counterReducer,
        loader:loaderReducer,
        favroites:favroitesReducer
    }
 })

