 
      
        
        var letter = "";
        var numberOfTries = 9;
        var win = 0, lose = 0;
        var guessesO = [];
        
        function letterGenerator() {
            var letters = "abcdefghijklmnopqrstuvwxyz";

            var randomLetter = Math.floor(Math.random()*letters.length);
            console.log(randomLetter);


            letter = letters.charAt(randomLetter);
            /*/gamePlay(letter);/*/
               console.log(letter);
        }
        letterGenerator();
        function gamePlay(letter) {
          document.onkeydown = function(event){
             var pick = event.charCode;
             guessesO.push(pick);
            if(event.charCode == letter) {
                win++;
                document.getElementById("wins").innerHTML = win;
                gameRestart();
            }
            else {
                document.getElementById("guesses").innerHTML += event.charCode;
                numberOfTries--;

                if (numberOfTries == 0){
                    lose++;
                    document.getElementById("losses").innerHTML = lose;
                    gameRestart();
                } 
                else {
                    document.getElementById("guessesLeft").innerHTML = numberOfTries;
                    gamePlay(letter);
                }
            }
        }
    }


        function gameRestart() {
            document.getElementById("guesses").innerHTML = guessesO;
            document.getElementById("guessesLeft").innerHTML = numberOfTries;
            letterGenerator();
        }
   

    gameRestart();
 