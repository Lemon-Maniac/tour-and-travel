let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

// saat ngescroll akan ditutup
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
}

// saat mencet 
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
} );