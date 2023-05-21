const btnMenu = document.querySelector('#menu');
const btnClose = document.querySelector('#close');
const elLinks = document.querySelector('.links');

btnMenu.addEventListener('click', () => {
    elLinks.classList.toggle('active')
    console.log('ok')
})
btnClose.addEventListener('click', () => {
    elLinks.classList.toggle('active')
})

