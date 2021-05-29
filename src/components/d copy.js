const handleClick = (movie) => {
   if (trailerUrl != '') setTrailer('');
   else {
      movieTrailer(movie?.name || '')
         .then((url) => {
            const urlPrarams = new URLSearchParams(new URL(url).search);
            setTrailer(urlPrarams.get('v'));
         })
         .catch((error) => console.log(error));
   }
};
