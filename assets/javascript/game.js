
    var tries = 7;
    var win = 0;
    var lost = 0;
    var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var compLetter = "";
    var guess = '';
    var random =0;

    //Set Computer Guess

    //Random number generator
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    }
    random = getRandomIntInclusive(0,25);

    // get Random Char
    function getRandomCharacter(random,letters){
        compLetter = letters[random];
        return compLetter
    }
     compLetter = getRandomCharacter(random, letters);

    console.log(random);
    console.log(compLetter);




    function setGuess(event){
        x = event.keyCode;
        guess = (String.fromCharCode(x));
        return guess;
    }




    function playGame(){
        document.getElementById(winS).innerHTML= "Heey";
        console.log("you won");
      if (guess == compLetter)
      {
          win = win+1;
          //document.getElementById(winS).innerHTML= "Heey";
          console.log("you won");
      }
    }

 