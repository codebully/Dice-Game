var playerOneScore = 0;
var playerTwoScore = 0;

function reset() {
  playerOneScore = 0;
  playerTwoScore = 0;
  document.getElementById('playerOneScore').innerHTML = playerOneScore
  document.getElementById('playerTwoScore').innerHTML = playerTwoScore
  setPrettyFaces();
}

function setPrettyFaces() {
  console.log(document.getElementById('playerOneDie').src)
  document.getElementById('playerOneDie').src = "./images/trollface.png";
  document.getElementById('playerTwoDie').src = "./images/trollface.png";
}

function drawNumber() {
  var number = Math.ceil(Math.random() * 6);
  return number;
}

function drawsSuck() {
  console.log("Draw!")
  setPrettyFaces();
}

function setDice(playerOne, playerTwo) {
  document.getElementById('playerOneDie').src = "./images/DICE" + playerOne + ".png";
  document.getElementById('playerTwoDie').src = "./images/DICE" + playerTwo + ".png";
}

function compareNumber(playerOne, playerTwo) {
  if (playerOne > playerTwo) {
    playerOneScore += 1
    setDice(playerOne, playerTwo);
    document.getElementById('playerOneScore').innerHTML = playerOneScore
  } else if (playerOne < playerTwo) {
    playerTwoScore += 1
    setDice(playerOne, playerTwo);
    document.getElementById('playerTwoScore').innerHTML = playerTwoScore
  } else if (playerOne === playerTwo) {
    drawsSuck(playerOne, playerTwo)
  }
}
