document.addEventListener('DOMContentLoaded', () => {


    const cardArray = [

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

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/images/cat-card.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'assets/images/cat-card.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/cat-card.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'assets/images/blank-card.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/blank-card.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'assets/images/cat-card.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/cat-card.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })