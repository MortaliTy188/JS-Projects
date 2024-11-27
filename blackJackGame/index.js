let player = {
  name: "",
  chips: 0,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  return randomNumber > 10 ? 10 : randomNumber === 1 ? 11 : randomNumber;
}

function startGame() {
  player.name = prompt("Enter your name:");
  player.chips = parseInt(prompt("Enter how much chips you have:"), 10);
  if (isNaN(player.chips) || player.chips <= 0) {
    alert("Please enter a valid chip amount.");
    return;
  }
  resetGame();
}

function resetGame() {
  if (player.chips < 20) {
    alert("Not enough chips to start the game!");
    return;
  }
  player.chips -= 20;
  isAlive = true;
  hasBlackJack = false;
  cards = [getRandomCard(), getRandomCard()];
  sum = cards[0] + cards[1];
  renderGame();
}

function renderGame() {
  playerEl.textContent = player.name + ": $" + player.chips;
  cardsEl.textContent = "Cards: " + cards.join(" ");
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    player.chips += 60;
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

function nextTry() {
  resetGame();
}
