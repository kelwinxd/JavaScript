const btn = document.querySelector('button')


function fetchJoke(){
    fetch('https://api.chucknorris.io/jokes/random').then(r => r.json())
    .then(r => document.querySelector('.joke').innerText = '" ' + r.value + ' "')
}



btn.addEventListener('click', fetchJoke )