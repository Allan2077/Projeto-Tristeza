
const header = document.querySelector('header');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const ul = document.querySelector('#ul');
const main = document.querySelector('main')
     

function darkMode() {
    body.classList.toggle('darkMode');
    footer.classList.toggle('darkMode');
    ul.classList.toggle('darkMode');
}

function darkModeLetras() {
    header.classList.toggle('darkModeLetras');
    main.classList.toggle('darkModeLetras');
   
}

