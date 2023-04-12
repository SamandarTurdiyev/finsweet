const menuBar =document.querySelector('.menu');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , () =>{
  
    menuBar.classList.toggle('active')

    hamburger.classList.toggle('active')
});




let url = `https://newsapi.org/v2/everything?q=Samsung&apiKey=75a7c5a9a671455d8a97b8b607246ea4`

const fragments = document.createDocumentFragment();
const popularCards = document.querySelector('.popular__cards');
// const pagiantioWrapper =  document.querySelector('.pagination-wrapper');

async function blogData() {
    try {
        const response = await fetch(url);
        let data = await response.json();
        

        // let totalPages = data.totalResults > 5 ? 10 : data.totalResults;

        data.articles.slice(8,11).map((samsung) => {
                    const {title, author, urlToImage, content, } = samsung;
                    const popularCardsCard = document.createElement('div');
                    popularCardsCard.classList.add('popular__cards-card');
            
                    const img = document.createElement('img');
                    img.classList.add('popular__cards-card-img');
                    img.src = urlToImage;
                    img.alt = title;
            
                    
            
                    
            
                    const cardAuthor = document.createElement('span');
                    cardAuthor.classList.add('card__about-byName-two');
                    cardAuthor.textContent = author;
            
                    const cardTitle = document.createElement('h3');
                    cardTitle.classList.add('card__about-title');
                    cardTitle.textContent = title;
            
                    const cardText = document.createElement('p');
                    cardText.classList.add('card__about-text')
                    cardText.textContent = content;
            
            
                    fragments.appendChild(cardAuthor);
                    fragments.appendChild(cardTitle);
                    fragments.appendChild(cardText);
            
            
                    const cardAbout = document.createElement('div');
                    cardAbout.classList.add('card__about');
            
                    cardAbout.appendChild(fragments);
            
            
                    popularCardsCard.appendChild(img);
                    popularCardsCard.appendChild(cardAbout);
            
                    popularCards.appendChild(popularCardsCard)
            
            
                })
               
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

blogData()