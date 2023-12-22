import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removFavMovies } from '../../Store/Slices/Fav';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {FaRegTrashCan} from "react-icons/fa6"
import './movie.css'



const Favourite = () => {
    const  favMovies=useSelector((state)=>state.favroites);
    const dispatch=useDispatch()
    var navigate=useNavigate()
    var handelRemove=(id)=>{
        dispatch(removFavMovies(id))
    }
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;
      };
    return (
        <>
 <div style={{backgroundColor:'black'}} >

        <div className='container'>
                <Row xs={2} md={3} className="g-4 mt-5 ">
                {favMovies .length>0? 
                (favMovies.map((movie) => (
                    <Col key={movie.id}  xs={12} sm={6} md={4}>
                        <Card  style={{backgroundColor:'black', color:'gray',border:'1px solid gray'}} className='hov'> 
                            <Card.Img variant="top"  
                         className='img'   src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path } `}  />
                            <Card.Body className='single-div' >
                            <span style={{cursor:'pointer'}} >
                         <FaRegTrashCan size={24} className='mb-3'    onClick={()=> handelRemove(movie)} />
                        </span>
                                <Card.Title  style={{fontSize:'18px',fontStyle:'italic'}}>{truncateText(movie.title, 20)}</Card.Title>
                                <Card.Title style={{fontSize:'18px',fontStyle:'italic'}} >Language: {movie.original_language}</Card.Title>
                                <Card.Title style={{fontSize:'18px',fontStyle:'italic'}}>Date: {movie.release_date}</Card.Title>
                                <button className="btn btn-danger" onClick={()=>{navigate(`/details/${movie.id}`)
                             }} >Details</button>
                               
                            </Card.Body>
                        </Card>
                   </Col>
                ))): ( <p style={{fontStyle:'italic',fontSize:'20px'}} > there is not found favorite movies until now !! </p>)} 
           </Row>
           </div> 
           </div>
        </>
    );
}

export default Favourite;
