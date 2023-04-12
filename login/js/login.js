const menuBar =document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , () =>{
  
    menuBar.classList.toggle('active')

    hamburger.classList.toggle('active')
});

const form = document.querySelector('#form');
const inputt = document.querySelectorAll('.login-part-input');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (inputt[0].value === '') {
        inputt[0].classList.add('notActive');
        inputt[0].classList.remove('Active');


    
    } else{
        inputt[0].classList.add('Active');
        inputt[0].classList.remove('notActive');

    } 
    if (inputt[1].value === '') {
        inputt[1].classList.add('notActive');
        inputt[1].classList.remove('Active');

    
    } else{
        inputt[1].classList.add('Active');
        inputt[1].classList.remove('notActive');

    }})