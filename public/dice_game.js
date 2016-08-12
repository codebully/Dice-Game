var playerOneScore = 0;
var playerTwoScore = 0;
var multiplier = 1;
var footerStatus = "off"


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
  activateTurboMode();
}

function activateTurboMode() {
  document.getElementById('playButton').innerHTML = "TURBO<br /> MODE! (+" + multiplier + ")"
  document.getElementById('playButton').style.backgroundImage = "-webkit-linear-gradient(#FD5F00 0%, #3F59F4 100%)"
}

function shutdownTurboMode() {
  document.getElementById('playButton').innerHTML = "PLAY";
  document.getElementById('playButton').style.backgroundImage = "-webkit-linear-gradient(#3F59F4 0%, #FF0009 100%)"
}

function setDice(playerOne, playerTwo) {
  document.getElementById('playerOneDie').src = "./images/DICE" + playerOne + ".png";
  document.getElementById('playerTwoDie').src = "./images/DICE" + playerTwo + ".png";
}

function compareNumber(playerOne, playerTwo) {
  shutdownTurboMode()
  if (playerOne > playerTwo) {
    playerOneScore += 1 * multiplier
    setDice(playerOne, playerTwo);
    document.getElementById('playerOneScore').innerHTML = playerOneScore
    multiplier = 1
  } else if (playerOne < playerTwo) {
    playerTwoScore += 1 * multiplier
    setDice(playerOne, playerTwo);
    document.getElementById('playerTwoScore').innerHTML = playerTwoScore
    multiplier = 1
  } else if (playerOne === playerTwo) {
    drawsSuck(playerOne, playerTwo)
    multiplier += 1;
  }
}

function enterNames() {
  var playerOne = prompt("Player One Name?") || "P1";
  var playerTwo = prompt("Player Two Name?") || "P2";
  document.getElementById('playerOneName').innerHTML = playerOne.toUpperCase().substring(0,3) + ":"
  document.getElementById('playerTwoName').innerHTML = playerTwo.toUpperCase().substring(0,3) + ":"
}

function printNames(playerOneName, playerTwoName) {
  console.log(playerOneName + playerTwoName)
}

function hideFooter() {
  document.getElementById('darkgrey').style.visibility = 'hidden';
  footerStatus = "off";
}

function showFooter() {
  document.getElementById('darkgrey').style.visibility = 'visible';
  footerStatus = "on";
}

function toggleFooter() {
  if (footerStatus === "on") {
    hideFooter();
  } else {
    showFooter();
  }
}
