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
  
    return (
        <>
        {(loader)? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>: 

   <div style={{backgroundColor:'black',height:'100vh',color:'white'}}>
    <div className='pt-5 container  ' >    
     <div className="header">
        <FaReply size={20} onClick={()=>navigate('/')}/>
      </div>  
     
     {/* <div  className='row'style={{border:'1px solid gray',height:'50vh'}} >
        <div  className='col-md-5' >
             <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path }`} /> 
        </div>
        <div className=' col-md-7'>
          <h1>{movies.title}</h1>
          <p>overview:{movies.overview}</p>
          <p>release_date: {movies.release_date}</p>
          <p>roriginal_language: {movies.original_language}</p>
          </div>

        </div> */}
        <Row>
          <Col>
           <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path }` } className='col-sm-12' />
          </Col>
            <Col>            
            <h1>{movies.title}</h1>   
          <p> Language: {movies.original_language}</p>
          <p>Date: {movies.release_date} </p> 
         
          </Col>
        </Row>
        </div>
        </div>
        }
        </> );
}

export default MoviesDetails;