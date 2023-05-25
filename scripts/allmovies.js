window.addEventListener("DOMContentLoaded", () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTkzODVlZDFjNTAyY2ViN2Y2ZTU5MzZlY2RiNDZjZiIsInN1YiI6IjY0NjM0Yjk0ZTNmYTJmMDE0NWVkOTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GNIXd0vhBZIHtTQxWxUoXw-x7PF27UHPhgx48sxZk4",
    },
  };

  const containerMovies = document.querySelector(".container-movies");
  const ancreNext = document.querySelector("#nextAncre");
  const ancrePrev = document.querySelector("#previousAncre");

  const allMovies = async (count) => {
    const getUrlAllMovies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" + count,
      options
    );
    const allMoviesJson = await getUrlAllMovies.json();
    console.log(allMoviesJson);
    //Loop for screen AllMovie
    let countMovie = 0;

    allMoviesJson.results.forEach((result) => {
      if (countMovie < 8) {
        const titleMovie = result.title;
        const pathImg = result.poster_path;
        const idMovie = result.id;
        // console.log(idMovie);

        //Create div for oneMovie
        const containerOneMovie = document.createElement("div");
        containerMovies.appendChild(containerOneMovie);
        const ancreOneMovie = document.createElement("a");
        ancreOneMovie.href = "movie/" + idMovie;
        containerOneMovie.append(ancreOneMovie);
        const titleOneMovie = document.createElement("h2");
        const imgOneMovie = document.createElement("img");
        // console.log(containerOneMovie);
        titleMovie.innerText = titleMovie;
        imgOneMovie.src = "https://image.tmdb.org/t/p/original" + pathImg;
        ancreOneMovie.append(titleMovie, imgOneMovie);
      }
      countMovie++;
    });
  };

  allMovies();

  let count = 1;
  console.log(count);
  
  if (count === 1) {
    ancrePrev.style.display = "none";
  } else {
    ancrePrev.style.display = "block";
  }
  
  ancreNext.addEventListener("click", (e) => {
    e.preventDefault();
    containerMovies.innerHTML = "";
    count++;
    allMovies(count);
    console.log(count);
  
    if (count === 1) {
      ancrePrev.style.display = "none";
    } else {
      ancrePrev.style.display = "block";
    }
  });
  
  ancrePrev.addEventListener("click", (e) => {
    e.preventDefault();
    containerMovies.innerHTML = "";
    count--;
    allMovies(count);
    console.log(count);
  
    if (count === 1) {
      ancrePrev.style.display = "none";
    } else {
      ancrePrev.style.display = "block";
    }
  });
  
});
