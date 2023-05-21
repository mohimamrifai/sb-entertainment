const btnMenu = document.querySelector('#menu');
const btnClose = document.querySelector('#close');
const elLinks = document.querySelector('.links');

btnMenu.addEventListener('click', () => {
    elLinks.classList.toggle('active')
})
btnClose.addEventListener('click', () => {
    elLinks.classList.toggle('active')
})

