import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {  useNavigate } from 'react-router-dom';
import instance from '../../axiosConfig/instance';
import './movie.css'
import { useSelector ,useDispatch } from 'react-redux';
import {FaRegHeart,FaHeart} from "react-icons/fa6"
import { addFavMovies,removFavMovies } from '../../Store/Slices/Fav';

const MoviesList = () => {
const [movies, setMovies] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const navigate=useNavigate()
var favMovie = useSelector((state)=>state.favroites);
const dispatch=useDispatch()

const handelAdd = (movie) => {
const isMovieInFav = favMovie.some((favoriteMovie) => favoriteMovie.id === movie.id);
if (!isMovieInFav) {
dispatch(addFavMovies(movie));
}
};
const removefav =(movid) =>{
dispatch (removFavMovies(movid))
}
useEffect(() => {
instance.get(`/movie/popular?page=${currentPage}`).then((res) => {
setMovies(res.data.results)
}).catch((err) => {
console.log(err);
})

}, [currentPage])
return (
<>
    <div style={{backgroundColor:'black'}} className='pt-5 '>
        <div className='container'>
            <Row xs={2} md={3} className="g-4 ">
                {movies? (movies.map((movie) => (
                <Col key={movie.id}>
                <Card style={{backgroundColor:'black', color:'gray',border:'1px solid gray'}} className='hov'>
                    <Card.Img variant="top" className='img' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path }`} />
                    <Card.Body className='single-div'>
                    <span style={{cursor:'pointer'}}>
                        {favMovie.some((favoriteMovie) => favoriteMovie.id === movie.id) ? (
                        <FaHeart color="red" size={24} onClick={()=> removefav(movie)} />
                            ) : ( <FaRegHeart size={24} onClick={()=> handelAdd(movie)} /> ) }
                    </span>
                            <Card.Title style={{fontSize:'18px',fontStyle:'italic'}}  >{movie.title}</Card.Title>
                            <Card.Title style={{fontSize:'16px',fontStyle:'italic'}}   >Language: {movie.original_language}</Card.Title>
                            {/* <Card.Title>Date: {movie.release_date}</Card.Title> */}

                            <span> <button className="btn btn-danger "onClick={()=>{navigate(`/details/${movie.id}`) }}
                                >Details</button>
                            </span>
                    </Card.Body>
                </Card>
                </Col>
                
                ))) : ( <p>Loading</p>)}
            </Row>
            <div className='d-flex justify-content-around mt-3 pb-2'>
                <button className='btn btn-danger' onClick={()=>{setCurrentPage(currentPage-1);
                    console.log(currentPage);}}>previous</button>
                <button className='btn btn-danger' onClick={()=>{setCurrentPage(currentPage+1);
                    console.log(currentPage);}}>Next</button>
            </div>

        </div>
    </div>
</>
);
}


export default MoviesList;