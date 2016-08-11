var playerOneScore = 0;
var playerTwoScore = 0;

  function reset() {
    playerOneScore = 0;
    playerTwoScore = 0;
    document.getElementById('playerOneScore').innerHTML = playerOneScore
    document.getElementById('playerTwoScore').innerHTML = playerTwoScore
    document.getElementById('playerOneDie').src = "./images/trollface.png";
    document.getElementById('playerTwoDie').src = "./images/trollface.png";
  }

  function drawNumber() {
    var number = Math.ceil(Math.random() * 6);
    return number;
  }

  function compareNumber(playerOne, playerTwo) {
    if (playerOne > playerTwo) {
      playerOneScore += 1
      document.getElementById('playerOneScore').innerHTML = playerOneScore
    } else if (playerOne < playerTwo) {
      playerTwoScore += 1
      document.getElementById('playerTwoScore').innerHTML = playerTwoScore
    } else {
      console.log("draw")
    }
    document.getElementById('playerOneDie').src = "./images/DICE" + playerOne + ".png";
    document.getElementById('playerTwoDie').src = "./images/DICE" + playerTwo + ".png";
  }

function drawsSuck() {
  document.getElementById('playerOneDie').src = "./images/trollface.png";
  document.getElementById('playerTwoDie').src = "./images/trollface.png";
  
}
