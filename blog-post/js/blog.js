const menuBar =document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , () =>{
  
    menuBar.classList.toggle('active')

    hamburger.classList.toggle('active')
});
let url = `https://reqres.in/api/users`;
const blogPost = document.querySelector('.blog-post');
const form = document.getElementById('form');




form.addEventListener('submit', (e) => {
e.preventDefault();
const postImg = document.getElementById('postImg').files[0];
const myImg = document.getElementById('myImg').files[0];
const myUserName = document.getElementById('myUserName').value;
const postDate = document.getElementById('postData').value;
const postTitle = document.getElementById('postTitle').value;
const postCategory = document.getElementById('postCategory').value;
const postText = document.getElementById('postText').value;

const read = new FileReader()

read.readAsDataURL(postImg,myImg)
read.onload = () =>{
    const postUrl = read.result
    const myImgUrl = read.result

    const formData ={
        myUserName : myUserName,
        postDate : postDate,
        postTitle : postTitle,
        postCategory : postCategory,
        postText : postText
    }
    fetch(url, {
         method: 'POST',
         headers: { 'Content-type': 'application/json' },
         body: JSON.stringify(formData)}).then((response) => response.json()).then((data) =>{
            const div = document.createElement('div');
            div.innerHTML =     `
            <div class="blogPost-about">
            <img class="postImg" src="${postUrl}" alt="img">
                    <div class="blogPost-about-me">
                        <img src="${myImgUrl}" alt="image" class="blogPost-about-me-img">
                        <div class="div">
                            <h3 class="blogpost-about-me-myName">${myUserName}</h3>
                            <p class="blogPost-about-me-text">${postDate}</p>
                        </div>
                        
                    </div>
                    <h2 class="blogPost-about-title">
                       ${postTitle}
                    </h2>
                    <p class="blogPost-about-text">
                       ${postCategory}
                    </p>
                    <p class="blogPost-about-texts">
                       ${postText}
                    </p>
                    <p class="blogPost-about-texts">
                       ${postText}
                    </p>
                </div>
            `
            blogPost.appendChild(div)

         }).catch((err) => console.log(err))
}
form.reset();
})
