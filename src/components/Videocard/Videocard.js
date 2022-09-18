import React, { forwardRef } from 'react'
import './Videocard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';

const baseURL = "https://image.tmdb.org/t/p/original/";

const Videocard = forwardRef(({movie}, ref) => {
  return (
    <div ref={ref} className='videocard'>
      <img src={`${baseURL}${movie.backdrop_path}`} alt = "Movie Poster"></img>
      <div className = "videocardtitle">
      <TextTruncate line = {1} element = "p" truncateText='...' text= {movie.overview} /> 
      <h3>{movie.original_title || movie.title}</h3>
      <p className = "videocard_stats">
        {movie.media_type && `${movie.media_type} .`}
        {movie.release_date || movie.first_air_date} .
        <ThumbUpSharp />{" "}
      {movie.vote_count}
      </p>
      </div>
    </div>
  );
});

export default Videocard;
