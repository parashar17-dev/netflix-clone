import React, { useState } from 'react';
import Row from './components/Row.js';
import requests from './request.js';
import './App.css';
import Nav from './components/Nav.js';
import Banner from './components/Banner.js';

function App() {
   return (
      <div className="App">
         <Nav />
         <Banner />
         <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
         <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
         />
         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
         <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
         <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      </div>
   );
}

export default App;
