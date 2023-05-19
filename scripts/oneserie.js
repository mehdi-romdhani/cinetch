window.addEventListener("DOMContentLoaded",()=>{
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTkzODVlZDFjNTAyY2ViN2Y2ZTU5MzZlY2RiNDZjZiIsInN1YiI6IjY0NjM0Yjk0ZTNmYTJmMDE0NWVkOTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GNIXd0vhBZIHtTQxWxUoXw-x7PF27UHPhgx48sxZk4",
        },
    };

    console.log(window.location.href);

   const url = window.location.href;
   const getId = url.split('/');
   const idSerieOne = getId[6];

   const containerOneSerie = document.querySelector('.container-one-serie');

   
   console.log(getId);
   console.log(idSerieOne);

const getOneSerie = async ()=>{
    const urlOneSerie =  await fetch("https://api.themoviedb.org/3/movie/"+idSerieOne+"language=en-US&page=1",
    options);

    const jsonUrlArray = await urlOneSerie.json();
    console.log(jsonUrlArray);

    const title = jsonUrlArray.title;//Title Movie
    const imgSeriePath = jsonUrlArray.poster_path;//Img
    const genreMovie = jsonUrlArray.genres[0]['name'];//Genre
    const resumeMovie = jsonUrlArray.overview;//Resume Movie
    const releaseDate = jsonUrlArray.release_date;
    const prodCompany = jsonUrlArray.production_companies[0]['name'];

    console.log(genreMovie);
    //First Child Div
    const divOneSerie = document.createElement('div');//div Movie
    divOneSerie.classList.add('OneSerie');//add ClassList
    // console.log(divOneMovie);
    // console.log(getUrlMovie.title);

    const titleOneSerie = document.createElement('h2');//Title
    titleOneSerie.innerText = title;
    const imgSerie = document.createElement('img');//Img
    imgSerie.src = "https://image.tmdb.org/t/p/original"+ imgSeriePath;
    // console.log(imgMovie);
    divOneSerie.append(titleOneSerie,imgSerie);
    containerOneSerie.appendChild(divOneSerie);

    //Second Child Div

    const divResume = document.createElement('div');
    divResume.classList.add('resume-one-serie');
    containerOneSerie.appendChild(divResume);
    const titleParaResume = document.createElement('h3');
    const paraResume = document.createElement('p');
    titleParaResume.innerText = "Resume ";
    paraResume.innerText = resumeMovie;
    const genreSmallMovie = document.createElement('small');
    genreSmallMovie.innerText = "Genre : " + genreMovie;
    const authorMovie = document.createElement('small');//Author
    authorMovie.innerText = "Author : " + releaseDate;
    const prodMovie = document.createElement('small');
    prodMovie.innerText = prodCompany;

    divResume.append(titleParaResume,paraResume,genreSmallMovie,authorMovie,prodMovie);

    //Third Child Div 
    const divGoBack = document.createElement('div');
    divGoBack.classList.add('container-ancre');
    const ancreGoBackHome = document.createElement('a');
    ancreGoBackHome.href = "http://localhost/Projets/cinetch/";
    ancreGoBackHome.innerText = "Go back home";
    containerOneSerie.appendChild(divGoBack);
    divGoBack.appendChild(ancreGoBackHome);


    // console.log(containerOneMovie);
    // console.log(divOneMovie);




}

getOneSerie();
})