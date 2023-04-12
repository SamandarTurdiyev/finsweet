const menuBar =document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , () =>{
  
    menuBar.classList.toggle('active')

    hamburger.classList.toggle('active')
});

const form = document.querySelector('#form');
const inputt = document.querySelectorAll('.login-part-input');
const message = document.querySelectorAll('.text')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (inputt[0].value === '') {
        inputt[0].classList.add('notActive');
        inputt[0].classList.remove('Active');
        message[0].textContent = 'please enter a your username'


    
    } else{
        inputt[0].classList.add('Active');
        inputt[0].classList.remove('notActive');
        message[0].textContent = ''

    } 
    if (inputt[1].value === '') {
        inputt[1].classList.add('notActive');
        inputt[1].classList.remove('Active');
        message[1].textContent = 'There is an error in the password'

    
    } else{
        inputt[1].classList.add('Active');
        inputt[1].classList.remove('notActive');
        message[1].textContent = ''
    }})