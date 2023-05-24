window.addEventListener("DOMContentLoaded",()=>{
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTkzODVlZDFjNTAyY2ViN2Y2ZTU5MzZlY2RiNDZjZiIsInN1YiI6IjY0NjM0Yjk0ZTNmYTJmMDE0NWVkOTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GNIXd0vhBZIHtTQxWxUoXw-x7PF27UHPhgx48sxZk4",
        },
    };

    // console.log(window.location.href);

   const url = window.location.href;
   const getId = url.split('/');
   const idSerieOne = getId[6];

   const containerOneSerie = document.querySelector('.container-one-serie');
   const containerSerieReco = document.querySelector('.container-serie-recommandation');

   
//    console.log(getId);
//    console.log(idSerieOne);

const getOneSerie = async ()=>{
    const urlOneSerie =  await fetch("https://api.themoviedb.org/3/tv/"+idSerieOne+"language=en-US&page=1",
    options);
    // "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",

    const jsonUrlArray = await urlOneSerie.json();
    console.log(jsonUrlArray);

    const title = jsonUrlArray.name;//Title Movie
    const imgSeriePath = jsonUrlArray.poster_path;//Img
    const genreMovie = jsonUrlArray.genres[0]['name'];//Genre
    const resumeMovie = jsonUrlArray.overview;//Resume Movie
    const author = jsonUrlArray.created_by[0]['name'];
    const prodCompany = jsonUrlArray.production_companies[0]['name'];

    // console.log(genreMovie);
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
    authorMovie.innerText = "Author : " + author;
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

const getRecommandSerie = async ()=>{

    const getUrlReco = await fetch('https://api.themoviedb.org/3/tv/'+idSerieOne+'/recommendations?language=en-US&page=1', options);
    const arrayReco = await getUrlReco.json();

    const urlReview = await fetch('https://api.themoviedb.org/3/tv/'+idSerieOne+'/reviews?language=en-US&page=1', options);
    const reviewJSON = await urlReview.json();
    console.log(reviewJSON);


    
    let count = 0 ;
    // console.log(arrayReco);
    arrayReco.results.forEach((result) => {
        // console.log(result);
        const ancreBalise = document.createElement('a');
        ancreBalise.href = "../serie/"+result.id;

        const divOneSerieRecommandation = document.createElement('div');
        // console.log(containerSerieReco);
        containerSerieReco.append(divOneSerieRecommandation);
        divOneSerieRecommandation.append(ancreBalise);
        divOneSerieRecommandation.setAttribute('id',count);

        const nameTitle = result.name;
        const imgPath = result.poster_path;

        const titleReco = document.createElement('p');
        titleReco.innerText = nameTitle
        const imgReco = document.createElement('img');
        imgReco.src = "https://image.tmdb.org/t/p/w400"+imgPath;
        ancreBalise.append(titleReco,imgReco); 
        
        // console.log(result.name);

        count ++
        
    });

    

    

}

const reviewSerie = async () =>{
    const urlReview = fetch('https://api.themoviedb.org/3/tv/series_id/reviews?language=en-US&page=1', options)

}

getOneSerie();
getRecommandSerie();
})