 
      
        
        var letter = "";
        var numberOfTries = 9;
        var win = 0, lose = 0;
        
        function letterGenerator() {
            var letters = "abcdefghijklmnopqrstuvwxyz";
            var randomLetter = Math.floor(Math.random()*letters.length);
    
            letter = letters.charAt(randomLetter);
            gamePlay(letter);
        }

        function gamePlay(letter) {
            document.addEventListener('keyPress', function(event))
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

        function gameRestart() {
            document.getElementById("guesses").innerHTML = null;
            document.getElementById("guessesLeft").innerHTML = numberOfTries;
            letterGenerator();
        }
   

    gameRestart();
 