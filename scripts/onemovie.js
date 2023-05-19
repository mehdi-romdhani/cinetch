
window.addEventListener('DOMContentLoaded',()=>{
    
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTkzODVlZDFjNTAyY2ViN2Y2ZTU5MzZlY2RiNDZjZiIsInN1YiI6IjY0NjM0Yjk0ZTNmYTJmMDE0NWVkOTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GNIXd0vhBZIHtTQxWxUoXw-x7PF27UHPhgx48sxZk4",
        },
    };
    const containerOneMovie = document.querySelector('.container-one-movie');

    console.log("hello");
    console.log(window.location.href);
    const url = window.location.href;

    const idUrl = url.split('/');
    console.log(idUrl);

    console.log(idUrl[6]);

    
    const getUrlOneMovie = async()=>{
        const urlMovie = await fetch("https://api.themoviedb.org/3/movie/"+idUrl[6]+"language=en-US&page=1",
        options);
        const getUrlMovie = await urlMovie.json();
        console.log(getUrlMovie);
        const title = getUrlMovie.title;//Title Movie
        const imgMoviePath = getUrlMovie.poster_path;//Img
        const genreMovie = getUrlMovie.genres[0]['name'];//Genre
        const resumeMovie = getUrlMovie.overview;//Resume Movie
        const releaseDate = getUrlMovie.release_date;
        const prodCompany = getUrlMovie.production_companies[0]['name'];

        console.log(genreMovie);
        //First Child Div
        const divOneMovie = document.createElement('div');//div Movie
        divOneMovie.classList.add('OneMovie');//add ClassList
        console.log(divOneMovie);
        console.log(getUrlMovie.title);

        const titleOneMovie = document.createElement('h2');//Title
        titleOneMovie.innerText = title;
        const imgMovie = document.createElement('img');//Img
        imgMovie.src = "https://image.tmdb.org/t/p/original"+ imgMoviePath;
        console.log(imgMovie);
        divOneMovie.append(titleOneMovie,imgMovie);
        containerOneMovie.appendChild(divOneMovie);

        //Second Child Div

        const divResume = document.createElement('div');
        divResume.classList.add('resume-one-movie');
        containerOneMovie.appendChild(divResume);
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
        containerOneMovie.appendChild(divGoBack);
        divGoBack.appendChild(ancreGoBackHome);


        console.log(containerOneMovie);
        console.log(divOneMovie);



    }

    getUrlOneMovie();
})