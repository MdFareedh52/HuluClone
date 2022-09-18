import React, { useEffect, useState } from 'react'
import './Result.css';
import Videocard from './../Videocard/Videocard';
import axios from './../../Helper/Axios';
import requests from './../../Helper/Request';
import FlipMove from 'react-flip-move';


function Result({selectedoption}) {
  const [movies , setMovies] = useState([]);

  useEffect(()=> {
    //runs this code once when the resut components load /mount
    async function fetchData () {
        const request = await axios.get(selectedoption);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
  },[selectedoption])

  return (
    <div className='result'>
      <FlipMove>
      {movies.map((movie) => (
        <Videocard key = {movie.id} movie = {movie} />
      ))}
      </FlipMove>  
    </div>
  )
}

export default Result
