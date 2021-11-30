document.addEventListener('DOMContentLoaded', () => {


    const cardDeck = [

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

    cardDeck.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    function createGame() {
      for (let i = 0; i < cardDeck.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/images/cat-card.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', cardFlip)
        grid.appendChild(card)
      }
    }
  
    
    function matchChecker() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'assets/images/cat-card.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/cat-card.png')
        alert("The spell won't work if you use the same card!")
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert("Well done! You're almost there!")
        cards[optionOneId].setAttribute('src', 'assets/images/blank-card.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/blank-card.png')
        cards[optionOneId].removeEventListener('click', cardFlip)
        cards[optionTwoId].removeEventListener('click', cardFlip)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'assets/images/cat-card.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/cat-card.png')
        alert("Sorry, that's not a match! Keep trying!")
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardDeck.length/2) {
        resultDisplay.textContent = "Fantastic work! The spell is ready to cast!"
      }
    }
  
    function cardFlip() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardDeck[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardDeck[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(matchChecker, 500)
      }
    }
  
  
    createGame()
  })