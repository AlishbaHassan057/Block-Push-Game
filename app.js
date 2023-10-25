let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let player1Button = document.querySelector(".button-1");
let player2Button = document.querySelector(".button-2");
let winnerText = document.getElementById("winner");

let card1Position = 0;
let card2Position = 0;
let winningPosition = 600;
player1Button.addEventListener("click", function () {
  card1Position += 20;
  if (card1Position >= winningPosition) {
    card1Position = winningPosition;
    declareWinner("Player 1");
  }
  card1.style.transform = `translateX(${card1Position}px)`;
});

player2Button.addEventListener("click", function () {
  card2Position -= 20;
  if (card2Position >= winningPosition) {
    card2Position = winningPosition;
    declareWinner("Player 2");
  }
  card2.style.transform = `translateX(${card2Position}px)`;
});

function declareWinner(player) {
  alert(`${player} Wins!`);
  player1Button.disabled = true;
  player2Button.disabled = true;
}
