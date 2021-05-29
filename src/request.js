//Just a file for convience that contains all the requests that we are going to make

const API_KEY = 'da7d8406c87167100f15f1a85ba5b7af';

// Requests that we are going to make to the Api
const requests = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
