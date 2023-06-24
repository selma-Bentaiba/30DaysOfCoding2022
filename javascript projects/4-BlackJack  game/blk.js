let cards = []
let sum = 0
/*  let player = {
  name : "selma" ,
  price : 200
} */
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
/* let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " :  " + player.price */
function getRandomCard() {
  //**
  // if 1     -> return 11
  // if 11-13 -> return 10
  let rand = Math.floor(Math.random() * 13) + 1
  if (rand > 10) {
    return 10
  } else if (rand === 1) {
    return 11
  } else {
    return rand
  }
}
function startGame() {
  // **
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}
function renderGame() {
  cardEl.textContent = "Cards : "

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " - "
  }
  sumEl.textContent = "Sum : " + sum

  if (sum <= 20) {
    message = "Do you want to draw a new card? "
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! "
    hasBlackJack = true;
  } else {
    message = "You're out of the game! "
    isAlive = false;
  }
  messageEl.textContent = message
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
