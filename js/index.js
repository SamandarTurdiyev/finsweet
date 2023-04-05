const menuBar =document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , () =>{
    console.log('ok');
    menuBar.classList.toggle('active')

    hamburger.classList.toggle('active')
})