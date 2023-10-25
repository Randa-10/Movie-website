import React from 'react';
import Header from './../Navbar/navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
       <>
       <Header/>
       <Outlet/>
      
       </>
    );
}

export default AppLayout;
