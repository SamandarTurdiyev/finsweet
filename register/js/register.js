const menuBar =document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , () =>{
  
    menuBar.classList.toggle('active')

    hamburger.classList.toggle('active')
});
const form = document.getElementById('form');
// const fname = document.getElementById('fname-input');
// const lname = document.getElementById('lname-input');
// const userName = document.getElementById('username-input');
// const password = document.getElementById('password-input');
const input = document.querySelectorAll('.register__part-input');
const message = document.querySelectorAll('.text')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (input[0].value === '') {
        input[0].classList.add('notActive');
        input[0].classList.remove('Active');
        message[0].textContent = 'please enter your name'
        // message[0].textContent = 'message'

    
    } else{
        input[0].classList.add('Active');
        input[0].classList.remove('notActive');
        message[0].textContent = ''


    } 
    if (input[1].value === '') {
        input[1].classList.add('notActive');
        input[1].classList.remove('Active');
        message[1].textContent = 'please enter your lastname'

    
    } else{
        input[1].classList.add('Active');
        input[1].classList.remove('notActive');
        message[1].textContent = ''


    } 
    if (input[2].value === '') {
        input[2].classList.add('notActive');
        input[2].classList.remove('Active');
        message[2].textContent = 'please enter your username'

    
    } else{
        input[2].classList.add('Active');
        input[2].classList.remove('notActive');
        message[2].textContent = ''


    } 
    if (!input[3].value && !input[4].value) {
        input[3].classList.add('notActive');
        input[4].classList.add('notActive');
        
        message[3].textContent = 'please enter a password'
        message[4].textContent = 'please enter a password'
    } else if (input[3].value === input[4].value) {
        input[3].classList.remove('notActive');
        input[4].classList.remove('notActive');
        input[3].classList.add('Active');
        input[4].classList.add('Active');
        message[3].textContent = ''
        message[4].textContent = ''
    }
    
     else {
        input[3].classList.remove('Active');
        input[4].classList.remove('Active');
        
        input[3].classList.add('notActive');
        input[4].classList.add('notActive');
        message[3].textContent = 'There is an error in the password, please try again'
        message[4].textContent = 'There is an error in the password, please try again'
    }
    
})
