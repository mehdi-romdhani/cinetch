window.addEventListener("DOMContentLoaded", () => {
  const containerUpcomingMovie = document.querySelector(
    ".container-upcoming-movie"
  );
  const containerMovieTopRated = document.querySelector('.container-movie-top-rated')
  const containerSerie = document.querySelector(".container-serie");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTkzODVlZDFjNTAyY2ViN2Y2ZTU5MzZlY2RiNDZjZiIsInN1YiI6IjY0NjM0Yjk0ZTNmYTJmMDE0NWVkOTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GNIXd0vhBZIHtTQxWxUoXw-x7PF27UHPhgx48sxZk4",
    },
  };



  const getUpcomingMovie = async () =>{
    const getUrlUpcoming = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);    ;
    const urlComingJson = await getUrlUpcoming.json();
    console.log(urlComingJson);
    let count = 0;
    urlComingJson.results.forEach((movie) => {

      if(count < 8){

        const title = movie.title;
        const imgSrc = movie.backdrop_path;
        const idMovie = movie.id;
        console.log(idMovie);

        const Movie = document.createElement("div");
        Movie.classList.add("movieUpCom");
        containerUpcomingMovie.append(Movie);
        const ancreBalise = document.createElement("a"); //ancreBalise
        // ancreBalise.href = 'Movie/'+{idMovie};
        ancreBalise.href = "movie/" + idMovie;
        console.log(ancreBalise);

        const titleMovie = document.createElement("h2"); //title Movie
        const imgMovie = document.createElement("img"); //img Movie
        titleMovie.innerText = title;
        imgMovie.src = "https://image.tmdb.org/t/p/w400" + imgSrc;

        Movie.appendChild(ancreBalise);
        ancreBalise.append(titleMovie, imgMovie);
        console.log(Movie);
      }
      count ++;
    });


  }

  const getMovieTopRated = async () => {
    try {
      const urlMovieWeek = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);

      const getMovieWeek = await urlMovieWeek.json();

      console.log(getMovieWeek);
      let count = 0;

      getMovieWeek.results.forEach((mov) => {

        if(count < 8){

          const title = mov.title;
          const imgSrc = mov.backdrop_path;
          const idMovie = mov.id;
          console.log(idMovie);
  
          const movieRated = document.createElement("div");
          movieRated.classList.add("movieTopRated");
          containerMovieTopRated.append(movieRated);
          const ancreBalise = document.createElement("a"); //ancreBalise
          // ancreBalise.href = 'Movie/'+{idMovie};
          ancreBalise.href = "movie/" + idMovie;
          console.log(ancreBalise);
  
          const titleMovie = document.createElement("h2"); //title Movie
          const imgMovie = document.createElement("img"); //img Movie
          titleMovie.innerText = title;
          imgMovie.src = "https://image.tmdb.org/t/p/w400" + imgSrc;
          movieRated.appendChild(ancreBalise);
          ancreBalise.append(titleMovie, imgMovie);
          console.log(containerMovieTopRated);

          // Movie.append(titleMovie);
          // Movie.append(imgMovie);
  
          // console.log(title);
        }
        count ++;
      });
    } catch (error) {
      console.error(error);
    }
  };
  const getSerieOnAir = async () => {
    try {
      const getUrlSerieOnAir = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        options
      );
      const urlSerieAir = await getUrlSerieOnAir.json();
      let count = 0;
      urlSerieAir.results.forEach((serie) => {
        const titleSerie = serie.name;
        const imgSrc = serie.backdrop_path;

        if (count < 8) {
          const Serie = document.createElement("div");
          Serie.classList.add("series");
          containerSerie.append(Serie);
          const titleS = document.createElement("h2");
          const imgSerie = document.createElement("img");
          titleS.innerText = titleSerie;
          imgSerie.src = "https://image.tmdb.org/t/p/w400" + imgSrc;
          Serie.append(titleS);
          Serie.append(imgSerie);
          // console.log(Serie);
          // console.log(img);
        }
        count++;
      });
    } catch (error) {}
  };

  getMovieTopRated();
  getUpcomingMovie();
  getSerieOnAir();
});
