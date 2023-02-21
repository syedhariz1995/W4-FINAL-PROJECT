// API = https://www.omdbapi.com/?i=tt3896198&apikey=25c6a9ee

const movieListElement = document.querySelector('.movies');

async function getMovieList(){
    let movieNameInput = document.getElementById('search__input').value;
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=25c6a9ee&s=${movieNameInput || 'John Wick'}`);
    const moviesData = await movies.json();
    movieListElement.innerHTML = moviesData.Search.map(movie => movieHTML(movie)).join('')

}

getMovieList();


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

setTimeout(() => {
    getMovieList();
}, 2000);
