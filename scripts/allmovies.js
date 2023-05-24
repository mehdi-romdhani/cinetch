window.addEventListener('DOMContentLoaded',()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTkzODVlZDFjNTAyY2ViN2Y2ZTU5MzZlY2RiNDZjZiIsInN1YiI6IjY0NjM0Yjk0ZTNmYTJmMDE0NWVkOTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GNIXd0vhBZIHtTQxWxUoXw-x7PF27UHPhgx48sxZk4'
        }
      };

    const constainerMovies = document.querySelector('.container-movies');

    const allMovies = async ()=>{
        const getUrlAllMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const allMoviesJson = await getUrlAllMovies.json();
        console.log(allMoviesJson);
        
    }

    allMovies();
})