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
  document.getElementById('playerOneDie').src = "./images/trollface.png";
  document.getElementById('playerTwoDie').src = "./images/trollface.png";
}

function drawNumber() {
  var number = Math.ceil(Math.random() * 6);
  return number;
}

function drawsSuck() {
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

function enterNames() {
  var playerOne = prompt("Player One Name?") || "P1";
  var playerTwo = prompt("Player Two Name?") || "P2";
  document.getElementById('playerOneName').innerHTML = playerOne.toUpperCase().substring(0,3)
  document.getElementById('playerTwoName').innerHTML = playerTwo.toUpperCase().substring(0,3)
}

function printNames(playerOneName, playerTwoName) {
  console.log(playerOneName + playerTwoName)
}

status = "on"

function hideFooter() {
  if (status === "on") {
    document.getElementById('darkgrey').style.visibility = 'hidden';
    status = "off";
  } else {
    document.getElementById('darkgrey').style.visibility = 'visible';
    status = "on";
    console.log(status)
  }
}
