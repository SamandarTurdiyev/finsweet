const menuBar =document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , () =>{
  
    menuBar.classList.toggle('active')

    hamburger.classList.toggle('active')
});







let url = `https://newsapi.org/v2/everything?q=Samsung&apiKey=b2fe8d6d6652440ba40b99b80eb6087d`

const fragmentss = document.createDocumentFragment();
const popularCards = document.querySelector('.popularBlogs__cards');
// const pagiantioWrapper =  document.querySelector('.pagination-wrapper');

async function blogDate() {
    try {
        const response = await fetch(url);
        let data = await response.json();
        console.log(data);

        // let totalPages = data.totalResults > 5 ? 10 : data.totalResults;

        data.articles.slice(0,3).map((samsung) => {
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

                // <div class="popularBlogs__cards-card">
                //         <img class="popularBlogs__cards-card-img" src="../images/women.jpg" alt="BusinesWomen">
                //         <div class="popularblogs__cards-card-about">
                //             <h4 class="popularBlogs__cards-card-about-workAbout">Business</h4>
                //             <h3 class="popularBlogs__cards-card-about-title">Top 6 free website mockup tools 2022</h3>
                //             <p class="popularBlogs__cards-card-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                //         </div>
                //     </div>
               
                // pagiantioWrapper.innerHTML = '';
                // if (totalPages > 1) {
                //     for (let i = 1; i <= totalResults; i++) {
                //        const button = document.createElement('button')
                //         button.innerText = i;
        
                //         if (currentPage === i) {
                //             button.classList.add('active');
        
                //         }
                //         button.addEventListener('click', () =>{
                //             currentPage = i;
                //             blogData();
                //         })
        
                //         pagiantioWrapper.appendChild(button)
                //     }
                // }

    } catch (error) {
        console.error(error)
    }
}

blogDate();