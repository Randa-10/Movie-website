import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios'
import instance from '../../axiosConfig/instance';
import { useDispatch, useSelector } from 'react-redux';
import {chaneLanguages}from '../../Store/Slices/Language'
import Spinner from 'react-bootstrap/Spinner';
import { FaReply } from 'react-icons/fa6';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StarRating from './StarRating'; 
const MoviesDetails = () => {
     const {id} = useParams()
     const [movies, setMovies] = useState([])   
      const navigate=useNavigate()

const loader = useSelector((state) => state.loader.loader)

     useEffect(()=>{

        async function getProduct(){
        try{
            const res= await instance.get(`/movie/${id}`)
            console.log(res.data);
            setMovies(res.data)
        }catch(err){
            console.log(err);
        }
      }
      getProduct()

      return ()=>{//UnMounting
       console.log("details unmounting");
      }

  
     },[])
     if (!movies || !movies.spoken_languages) {
      return null; 
    }
  
    return (
        <>
        {(loader)? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>: 

   <div style={{backgroundColor:'black',color:'white'}}>
    <div className='pt-5 container  ' >    
     <div className="header">
        <FaReply size={20} onClick={()=>navigate('/')} className='mb-3'/>
      </div>  
        <Row  className="card-container">
          <Col>
           <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path }` }  width="100%" />
          </Col>
          <Col >
      <h1>{movies.title}</h1>
      <p>original Language: {movies.original_language}</p>
      <p>Date: {movies.release_date}</p>
      <p>tagline: {movies.tagline}</p>
      <p>overview: {movies.overview}</p>

      <p>Language(s): {movies.spoken_languages.map(lang => lang.english_name).join(', ')}</p>

      <p>Vote Average: <StarRating rating={movies.vote_average / 2} /></p>
      
    </Col>
        </Row>
        </div>
        </div>
        }
        </> );
}

export default MoviesDetails;