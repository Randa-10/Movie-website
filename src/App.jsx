
import { BrowserRouter, Route, RouterProvider,
   Routes, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home';
import NotFound from './pages/NotFound/notFound';
import AppLayout from './components/appLayout/appLayout';
import RegisterUserFunc from './pages/Register/RegisterUserFunc';
import LoginUserFun from './pages/Login/LoginUserFunc'
import Movies   from'./pages/movies/MoviesList';
import MoviesList from './pages/movies/MoviesList';
import MoviesDetails from './pages/movies/MoviesDetails';
import Favourite from './pages/movies/Favourite';
import { store } from './Store/store';
import { Provider } from 'react-redux';

const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {index:true,element:<Movies/>},
      {path:"login",element:<LoginUserFun/>},
      {path:"signup",element:<RegisterUserFunc/>},
      
      {path:"Movies",element:<Movies/>,

      children:[
      {index:true,element:<MoviesList/>},

      ]
    },
    {path:"details/:id",element:<MoviesDetails/>},
    {path:"Favourite",element:<Favourite/>}

    ]

  },
  {
    path:"*",
    element:<NotFound/>
  }
])

function App() {

  return <div style={{backgroundColor:'black',height:"100vh" ,color:'white'}} ><Provider store={store}><RouterProvider router={router}/></Provider></div>
}

export default App


