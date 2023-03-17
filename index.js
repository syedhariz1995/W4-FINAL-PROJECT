
const searchBtn = document.querySelector('.search__button')

async function onSearchChange(event){
    searchBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>'
    searchBtn.classList.add("loading");

    
    const movieName = event.target.value
    localStorage.setItem('movieName', movieName)
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.location.href = `${window.location.origin}/movie.html`
}