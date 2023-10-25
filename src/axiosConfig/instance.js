import axios from 'axios'
import { store } from '../Store/store'
import { changeLoader } from '../Store/Slices/loader'
import { addFavMovies } from '../Store/Slices/Fav'

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
   
    params:{
        api_key:"90d1390fbab9eb133e5425311e950008"
    }
})
// interceptors.request
instance.interceptors.request.use((config)=>{
    store.dispatch(changeLoader(true))
    // store.dispatch(addFavMovies())

return config
},(err)=>{
return Promise.reject(err)
})

//interceptors.response
instance.interceptors.response.use((res)=>{
    store.dispatch(changeLoader(false))

// console.log(res);
return res
},(err)=>{
    return Promise.reject(err)

})

export default instance