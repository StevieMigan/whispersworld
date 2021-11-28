document.addEventListener('DOMContentLoaded', () => {


    const cards = [

        {
            name: 'clover',
            img: 'assets/images/clover-card.png'
        },
        {
            name: 'dragon-egg',
            img: 'assets/images/dragon-egg-card.png'
        },
        {
            name: 'lightning',
            img: 'assets/images/lightning-card.png'
        },
        {
            name: 'magic-potion',
            img: 'assets/images/magic-potion-card.png'
        },
        {
            name: 'moon',
            img: 'assets/images/moon-card.png'
        },
        {
            name: 'mushroom',
            img: 'assets/images/mushroom-card.png'
        },
        {
            name: 'rainbow-star',
            img: 'assets/images/rainbow-star-card.png'
        },
        {
            name: 'rose',
            img: 'assets/images/rose-card.png'
        },
        {
            name: 'clover',
            img: 'assets/images/clover-card.png'
        },
        {
            name: 'dragon-egg',
            img: 'assets/images/dragon-egg-card.png'
        },
        {
            name: 'lightning',
            img: 'assets/images/lightning-card.png'
        },
        {
            name: 'magic-potion',
            img: 'assets/images/magic-potion-card.png'
        },
        {
            name: 'moon',
            img: 'assets/images/moon-card.png'
        },
        {
            name: 'mushroom',
            img: 'assets/images/mushroom-card.png'
        },
        {
            name: 'rainbow-star',
            img: 'assets/images/rainbow-star-card.png'
        },
        {
            name: 'rose',
            img: 'assets/images/rose-card.png'
        }
    ]
   
    cards.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
let cardsChosen = []
let cardsChosenIds = []

function createBoard(){
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/images/cat-card.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

function flipCard() {
   let cardId = this.getAttribute('data-id')
      cardsChosen.push(cards[cardId].name)
      cardsChosenIds.push(cardId)
      this.setAttribute('src', cards[cardId].img)
}



})