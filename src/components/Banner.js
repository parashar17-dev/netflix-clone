import React, { useState, useEffect } from 'react';
import requests from '../request';
import axios from '../axios';
import '../Css-files/Banner.css';
function Banner() {
   // Movie state:
   const [movie, setMovie] = useState([]);

   //Runs when we load the page
   useEffect(() => {
      const fetchData = async () => {
         const request = await axios.get(requests.fetchNetflixOriginals);
         setMovie(
            request.data.results[
               Math.floor(Math.random() * request.data.results.length - 1)
            ]
         );
      };
      fetchData();
   }, []);

   const BaseUrl = 'https://image.tmdb.org/t/p/original/';

   //Function to trunacte the description string:
   const trunc = (s, n) => (s?.length > n ? s.substr(0, n - 1) + '...' : s);

   return (
      <header
         className="banner"
         style={{
            backgroundImage: `url(${BaseUrl}${movie?.backdrop_path})`,
            backgroundPosition: 'center center',
         }}
      >
         <div className="banner_content">
            {/* title*/}
            <h1 className="banner_title">
               {movie?.title || movie?.name || movie?.original_name}
            </h1>

            {/*div two buttons */}
            <div className="banner_btns">
               <button className="banner_btn">Play</button>
               <button className="banner_btn">My List</button>
            </div>

            {/* Description */}
            <h1 className="banner_description">
               {trunc(movie?.overview, 250)}
            </h1>
         </div>
         <div className="banner_fadeBottom"></div>
      </header>
   );
}

export default Banner;
