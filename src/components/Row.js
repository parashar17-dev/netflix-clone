import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../axios.js';
import '../Css-files/Row.css';
import movieTrailer from 'movie-trailer';
import Youtube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow }) {
   // Variable states:
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailer] = useState('');
   const [text, setText] = useState('');

   //Snippet of code that runs on a specific condition/Variable:
   // if the second argument of function is empty it only runs once
   // but if we have a varible it runs every time we chane the variable
   useEffect(() => {
      const fetchData = async () => {
         //This is going to make a request to the api to
         //get the required set of movies ex: Trending etc
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      };
      fetchData();
   }, [fetchUrl]);

   // Options for youtube Trailer:
   const opts = {
      height: '400',
      width: '100%',
      playerVars: {
         autoplay: 1,
      },
   };

   const show = (x) => {
      if (x) setText('Click again to stop the trailer');
      else setText('Trailer not Available');

      setTimeout(() => {
         setText('');
      }, 2000);
   };

   // Handing Click event on movie images
   // To show the Trailer of that movie
   const handleClick = (movie) => {
      if (trailerUrl !== '') setTrailer('');
      else {
         movieTrailer(
            movie?.name ||
               movie?.title ||
               movie?.original_name ||
               movie?.original_title
         )
            .then((url) => {
               show(true);
               const urlPrarams = new URLSearchParams(new URL(url).search);
               setTrailer(urlPrarams.get('v'));
            })
            .catch((error) => {
               console.log(error);
               show(false);
            });
      }
   };

   //Base url for poster image of movies:
   const BaseUrl = 'https://image.tmdb.org/t/p/original/';

   return (
      <div className="row">
         <h1 className="row-title">{title}</h1>
         {text && (
            <div className="alert">
               <i className="fas fa-info-circle"></i>
               {text}
            </div>
         )}
         <div className="row_posters">
            {movies.map((movie) => (
               <img
                  key={movie.id}
                  className={`poster ${isLargeRow && 'large_poster'}`}
                  src={`${BaseUrl}${
                     isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
               />
            ))}
         </div>
         {trailerUrl !== '' && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
   );
}

export default Row;
