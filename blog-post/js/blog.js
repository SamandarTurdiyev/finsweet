const menuBar =document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , () =>{
  
    menuBar.classList.toggle('active')

    hamburger.classList.toggle('active')
});

