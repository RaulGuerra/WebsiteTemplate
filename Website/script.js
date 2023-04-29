const bar = document.getElementById('bar'); //id is from the hamburger menu icon
const close = document.getElementById('close'); //id is from the close icon
const nav = document.getElementById('navbar'); //id is from the navbar

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}