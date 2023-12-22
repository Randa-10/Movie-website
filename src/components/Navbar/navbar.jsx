import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

import './navbar.css'
import img1 from '/public/assets/download2.png'
import { useSelector } from 'react-redux';

const Header = () => {
  const favMovies=useSelector((state)=>state.favroites)
    return (
      <>
       <Navbar expand="lg" className="bg1 ">
      <Container>
        <Navbar.Brand href="#home"><img src={img1} style={{width:'40%'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
         <NavLink to="/" className={({isActive})=> (isActive)?"act":"test"}>Movies</NavLink>
         <NavLink to="/Favourite" className={({isActive})=> (isActive)?"act":"test"}
         >Favourite
           <span className='text-light rounded bg-danger p-2 mx-1  ' >{favMovies.length}</span>
         </NavLink>
         <NavLink to="/login" className={({isActive})=>(isActive)?"act":"test"}  >Log in</NavLink>
         <NavLink to="/signup" className={({isActive})=> (isActive)?"act":"test"} >Sign Up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
}

export default Header;
