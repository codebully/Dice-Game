        var playerOneName = prompt("Player One Name?");
        var playerTwoName = prompt("Player Two Name?");

        document.getElementById("playerOneName").innerHTML=playerOneName;
        document.getElementById("playerTwoName").innerHTML=playerTwoName;


        //declare player tokens.
    var playerOneTokens = 0;
    var playerTwoTokens = 0;

    function rollEm()
    {
        //get player one dice:

        var p1d1 = Math.floor((Math.random()*6)+1);
        var p1d2 = Math.floor((Math.random()*6)+1);
        var p1d3 = Math.floor((Math.random()*6)+1);
        var p1d4 = Math.floor((Math.random()*6)+1);
        var p1d5 = Math.floor((Math.random()*6)+1);

        document.getElementById("p1d1").innerHTML=p1d1;
        document.getElementById("p1d2").innerHTML=p1d2;
        document.getElementById("p1d3").innerHTML=p1d3;
        document.getElementById("p1d4").innerHTML=p1d4;
        document.getElementById("p1d5").innerHTML=p1d5;

        //get player two dice:

        var p2d1 = Math.floor((Math.random()*6)+1);
        var p2d2 = Math.floor((Math.random()*6)+1);
        var p2d3 = Math.floor((Math.random()*6)+1);
        var p2d4 = Math.floor((Math.random()*6)+1);
        var p2d5 = Math.floor((Math.random()*6)+1);

        document.getElementById("p2d1").innerHTML=p2d1;
        document.getElementById("p2d2").innerHTML=p2d2;
        document.getElementById("p2d3").innerHTML=p2d3;
        document.getElementById("p2d4").innerHTML=p2d4;
        document.getElementById("p2d5").innerHTML=p2d5;

        //get total

        var playerOneTotal = p1d1+p1d2+p1d3+p1d4+p1d5;
        var playerTwoTotal = p2d1+p2d2+p2d3+p2d4+p2d5;

        document.getElementById("playerOneTotal").innerHTML=playerOneTotal;
        document.getElementById("playerTwoTotal").innerHTML=playerTwoTotal;

        //calculate scores and give out tokens:


        if (playerOneTotal > playerTwoTotal){

            playerOneTokens++;
            document.getElementById("rollResult").innerHTML=playerOneName + " Wins!";
            document.getElementById("playerOneTokens").innerHTML=playerOneTokens;

        }
        else if (playerOneTotal < playerTwoTotal){

            playerTwoTokens++;
            document.getElementById("rollResult").innerHTML=playerTwoName + " Wins!";
            document.getElementById("playerTwoTokens").innerHTML=playerTwoTokens;

        }
        else {
            document.getElementById("rollResult").innerHTML="It's a DRAW!"
        }

    }