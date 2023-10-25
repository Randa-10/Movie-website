import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
    return (
        <div>
         {/* <Link to="/products/add" className="mx-5">Add</Link> */}
        {/* <Link to="/moviesList">List</Link> */}
        <Link to="/Movies">moviesList</Link>
        
        {/* <Link to="/Movies/Favourite">moviedetails</Link> */}

            <Outlet/>
        </div>
    );
}

export default Movies;
