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

    return (
        <>
        <div className='container'>
                <Row xs={2} md={3} className="g-4 mt-5 ">
                {favMovies .length>0? 
                (favMovies.map((movie) => (
                    <Col key={movie.id}>
                        <Card  style={{backgroundColor:'black', color:'gray',border:'1px solid gray'}} className='hov'> 
                            <Card.Img variant="top"  
                         className='img'   src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path } `} height={300} />
                            <Card.Body className='single-div' >
                            <span style={{cursor:'pointer'}} >
                         <FaRegTrashCan size={24}    onClick={()=> handelRemove(movie)} />
                        </span>
                                <Card.Title >{movie.title}</Card.Title>
                                <Card.Title>Language: {movie.original_language}</Card.Title>
                                <Card.Title>Date: {movie.release_date}</Card.Title>
                                <button className="btn btn-danger" onClick={()=>{navigate(`/details/${movie.id}`)
                             }} >Details</button>
                               
                            </Card.Body>
                        </Card>
                   </Col>
                ))): ( <p style={{fontStyle:'italic',fontSize:'20px'}} > there is not found favorite movies until now !! </p>)} 
           </Row>
           </div> 
        </>
    );
}

export default Favourite;
