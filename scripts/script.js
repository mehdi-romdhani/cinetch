window.addEventListener("DOMContentLoaded", () => {
  const containerPopularMovie = document.querySelector(
    ".container-popular-movie"
  );

  const containerSerie = document.querySelector('.container-serie');

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTkzODVlZDFjNTAyY2ViN2Y2ZTU5MzZlY2RiNDZjZiIsInN1YiI6IjY0NjM0Yjk0ZTNmYTJmMDE0NWVkOTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GNIXd0vhBZIHtTQxWxUoXw-x7PF27UHPhgx48sxZk4",
    },
  };

  const getMovieWeek = async () => {
    try {
      const urlMovieWeek = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const getMovieWeek = await urlMovieWeek.json();

    //   console.log(getMovieWeek);


      getMovieWeek.results.forEach((movie) => {
     

            const title = movie.title;
            const imgSrc = movie.backdrop_path;
    
            const Movie = document.createElement("div");
            Movie.classList.add("movie");
            containerPopularMovie.append(Movie);
            const titleMovie = document.createElement("h2"); //title Movie
            const imgMovie = document.createElement("img"); //img Movie
            titleMovie.innerText = title;
            imgMovie.src = "https://image.tmdb.org/t/p/w400" + imgSrc;
            Movie.append(titleMovie);
            Movie.append(imgMovie);
        // console.log(title);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getSerieOnAir = async ()=>{
    try {

        const getUrlSerieOnAir = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options);
        const urlSerieAir = await getUrlSerieOnAir.json();
        let count = 0 
        urlSerieAir.results.forEach((serie)=>{

        const titleSerie = serie.name;
        const imgSrc = serie.backdrop_path;

            if(count < 5 ){
                const Serie = document.createElement('div');
                Serie.classList.add("series");
                containerSerie.append(Serie);
                const titleS = document.createElement("h2");
                const imgSerie = document.createElement("img");
                titleS.innerText = titleSerie;
                imgSerie.src = "https://image.tmdb.org/t/p/w400" + imgSrc;
                Serie.append(titleS);
                Serie.append(imgSerie);
                console.log(Serie);
                // console.log(img);
            }
                count++
          

        })
    } catch (error) {
        
    }

  }

  getMovieWeek();
  getSerieOnAir();
});
