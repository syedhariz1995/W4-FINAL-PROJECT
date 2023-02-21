// API = https://www.omdbapi.com/?i=tt3896198&apikey=25c6a9ee

const movieListElement = document.querySelector('.movies');

async function renderMovieList(filter){
    let movieNameInput = document.getElementById('search__input').value;

    if(!movieNameInput){
        movieNameInput = 'John Wick';
    }
    
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=25c6a9ee&s=${movieNameInput}`);
    const moviesData = await movies.json();

    let moviesList = moviesData.Search
    
    if(filter === "NEW_TO_OLD"){
        moviesList.sort((a,b) => (a.Year - b.Year))
      }
      else if( filter === "OLD_TO_NEW"){
        moviesList.sort((a,b) =>( b.Year - a.Year))
      }

      movieListElement.innerHTML = moviesList.map(movie => movieHTML(movie)).join('')
}

renderMovieList();


function movieHTML(movie) {
return `<div class="movie">
    <figure class="movie__img--wrapper">
        <img src="${movie.Poster}" class="movie__img">
    </figure>
        <div class="movie__info">
           <h3 class="title">${movie.Title}</h3> 
           <h3 class="type">${movie.Type}</h3> 
            <p class="year">${movie.Year}</p>
        </div>
    </div>`
    ;
}


function filterMovies(event){
    renderMovieList(event.target.value)
}