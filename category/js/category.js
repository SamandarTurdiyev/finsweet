const menuBar =document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , () =>{
  
    menuBar.classList.toggle('active')

    hamburger.classList.toggle('active')
});







let url = `https://newsapi.org/v2/everything?q=Samsung&apiKey=75a7c5a9a671455d8a97b8b607246ea4`;

const fragmentss = document.createDocumentFragment();
const popularCards = document.querySelector('.popularBlogs__cards');
const pagiantioWrapper =  document.querySelector('.pagination-wrapper');
const searchInput = document.getElementById('input');
let currentPage =1;

async function blogDate() {

    let search = searchInput.value;
    if (search) {
        url = `https://newsapi.org/v2/everything?q=${search}&apiKey=75a7c5a9a671455d8a97b8b607246ea4`
        
    }else{
        url = `https://newsapi.org/v2/everything?q=Samsung&apiKey=75a7c5a9a671455d8a97b8b607246ea4&page=${currentPage}`
    }




    try {
        popularCards.innerHTML=''


        const response = await fetch(url)
        let data = await response.json();
        console.log(data);
        let totalPages = data.totalResults > 5 ? 5 : data.totalResults
        

        if (data.articles.length === 0) {
            console.log(2);
            const notFound = document.createElement('div');
            notFound.textContent= 'hech qanday malumot yoq';
            popularCards.appendChild(notFound)
        }else{

            data.articles.slice(0,4).map((samsung) => {
                const {title, author, urlToImage, content, } = samsung;

                const popularCardsCard = document.createElement('div');
                popularCardsCard.classList.add('popularBlogs__cards-card');
        
                const img = document.createElement('img');
                img.classList.add('popularBlogs__cards-card-img');
                img.src = urlToImage;
                img.alt = title;
        
                

                const cardAbout = document.createElement('div');
                cardAbout.classList.add('popularblogs__cards-card-about');
        
                const cardAuthor = document.createElement('h4');
                cardAuthor.classList.add('popularBlogs__cards-card-about-workAbout');
                cardAuthor.textContent = author;
        
                const cardTitle = document.createElement('h3');
                cardTitle.classList.add('popularBlogs__cards-card-about-title');
                cardTitle.textContent = title;
        
                const cardText = document.createElement('p');
                cardText.classList.add('popularBlogs__cards-card-about-text')
                cardText.textContent = content;
        
              
        
                fragmentss.appendChild(cardAuthor);
                fragmentss.appendChild(cardTitle);
                fragmentss.appendChild(cardText);
        
        
                cardAbout.appendChild(fragmentss);
        
                popularCardsCard.appendChild(img);

                popularCardsCard.appendChild(cardAbout);
        
                popularCards.appendChild(popularCardsCard)
        
        
            })
        }
            

            // <div class="popularBlogs__cards-card">
            //         <img class="popularBlogs__cards-card-img" src="../images/women.jpg" alt="BusinesWomen">
            //         <div class="popularblogs__cards-card-about">
            //             <h4 class="popularBlogs__cards-card-about-workAbout">Business</h4>
            //             <h3 class="popularBlogs__cards-card-about-title">Top 6 free website mockup tools 2022</h3>
            //             <p class="popularBlogs__cards-card-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
            //         </div>
            //     </div>
           
            pagiantioWrapper.innerHTML = '';
            if (totalPages > 1) {
                for (let i = 1; i <= totalPages; i++) {
                   const pagenationNum = document.createElement('button');
                   pagenationNum.classList.add('pagee')
                    pagenationNum.innerText = i;
                    console.log('ok');
    
                    if (currentPage === i) {
                        pagenationNum.classList.add('pagination');
    
                    }
                    pagenationNum.addEventListener('click', () =>{
                        currentPage = i;
                        blogDate();
                    })
    
                    pagiantioWrapper.appendChild(pagenationNum)
                }
            }
        
       

    } catch (error) {
        console.error(error)
    }
}

blogDate();


searchInput.addEventListener('keypress', (event) => {
    if ( event.key === 'Enter') {
     blogDate()
    }
 }, 5000 )