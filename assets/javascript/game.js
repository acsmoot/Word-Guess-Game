//Choose a theme for your game!
//Array u ready for some football
// CLASS NOTES CHECK OUT MONDAY SLACK
// var obj = [ {q: word?, a:answer}, {q1: word?, a1:answer},]o
var footballQuestions = [
  "How many years must a player be retired to be eligible for the Pro Football Hall of Fame",
  "Who had the most rushing yards in the NFL for the 1980's",
  "What record setting quarterback was the NFL's 82nd draft pick",
  "What are NFL players required to wear in games",
  "Who is Da Coach",
  "When was the Super Bowl Shuffle recorded"
];

//Array u ready from some football answers
var footballAnswer = [
  "Five",
  "Eric Dickerson",
  "Joe Montana",
  "helmets",
  "Mike Ditka",
  "1985"
];

// directions to start the game
var directionsText = document.getElementById("directions-text");
directionsText.textContent = "Press any key to get started!";
//variables
var footballQuestion = document.getElementById("footballQuestion-text");

console.log(footballQuestion);
//Game Display Stats
var winsText = document.getElementById("wins-text");
var loseText = document.getElementById("losses-text");
var guessCountText = document.getElementById("guess-remain");
//Inital Game Stats
//Display initall table with zeros
// (# of times user guessed word correctly).
var wins = 0;
var losses = 0;
var guessCount = 0;

winsText.textContent = +wins;
// (# of times user has lost the game).
loseText.textContent = +losses;
//Number of Guesses Remaining: (# of guesses remaining for the user).
//Decrement from the total number of letters in the answer
//guesscount will initalize to the total number of characters in the answer
guessCountText.textContent = +guessCount;

//get the game started
document.onkeyup = function(event) {
  var userGuess = event.key;
  if (event.key === "Escape") {
    wins = 0;
    losses = 0;
    ties = 0;
  } else {
    console.log("game has started");
    startGame();
  }
};

function startGame() {
  //choose a random football question
  var randomQuestion =
    footballQuestions[Math.floor(Math.random() * footballQuestions.length)];

  footballQuestion.textContent =
    "Answer the following football question: " + randomQuestion;

  console.log(randomQuestion);

  // Hide the directions
  directionsText.textContent = "";
  getFootballAnswer(randomQuestion);
}

//  get answer by looping through football answer with index matching random question
function getFootballAnswer(randomQuestion) {
  for (index = 0; index < footballQuestions.length; index++) {
    if (randomQuestion === footballQuestions[index]) {
      // extra TBD      console.log(index);
      var answer = footballAnswer[index];
      console.log(answer);
    }
  }
  maskFootballAnswer(answer);
}

function maskFootballAnswer(answer) {
  //   // assigned answer to masked characters
  //   //    If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
  var maskedAnswer = "";
  var maskedCharacter = "?";
  for (i = 0; i < answer.length; i++) {
    maskedAnswer = maskedAnswer.replace(
      maskedAnswer.charAt(i),
      maskedCharacter
    );
  }
  console.log(maskedAnswer);
  //Display football answer as `**********` or `????????`
  var maskedAnswerText = document.getElementById("footballAnswer-text");
  maskedAnswerText.textContent = "Guess: " + maskedAnswer;
  guessFootballAnswer(answer, maskedAnswer);
}


function guessFootballAnswer(answer, maskedAnswer) {
  // var missing = 0;
  // var wrongGuess = true;

  var userGuess = "";
  var lettersguessed = []; // each guess is logged
  var answerLength = answer.length; // have the array.length be Total number of guesses
  // var totalGuesses = answer.length; // have the array.length be Total number of guesses
  // var replacedWord = maskedAnswer;
  
  var letterGuessedText = document.getElementById("footballGuess-text");

  document.onkeyup = function(event) {
    // Determines which key was pressed.
    userGuess = event.key;
    wrongGuess = false;
   
    console.log("They guessed " + userGuess);
    letterGuessedText.textContent = "Your guess is " + userGuess;

    // while (answer.length > 0) {}
    for (k = 0; k < answer.length; k++) {
	    if (answer.charAt(k) == userGuess) {
        //replace the char in maskedAns with guess
        console.log("guess is in the answer " + answer.charAt(k));
        //replace ? with char in right position
        maskedAnswer = maskedAnswer.replace(maskedAnswer.charAt(k), userGuess);
        console.log(maskedAnswer);
       
        wrongGuess = true;
        console.log("answerLength " + answerLength);
        answerLength--;
        //display
      } else if (wrongGuess) {
        console.log("NOT IN THE ANSWER");
        //counter
        // if guess is wrong
        //guesscounter is incremented
        if (answerLength == 0) {
          //  increment loss and game over
          console.log("GAME OVER");
        }
      }
    }
  };
  // }
  //Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
  // lettersguessed = lettersguessed.push(userGuess);

  console.log("in the guessFootballAnswer function");
  console.log("The answer Length is " + answerLength);
  for (var k = 0; k < lettersguessed.length; k++) {
    console.log("in the array" + letterguessed[k]);
    console.log("Letters the user has guessed " + lettersguessed[k]);
  }

  // if guess is wrong
  //guesscounter is decremented unti guesses is 0 then increment loss

  // As the user guesses the correct letters, reveal them: `m a d o _  _ a`
  //if guess is right
  // guesscounter not decremented
  // loop through answer and replace maskchar for char in arrayAnswer

  //no more maskchar then increment wins
}
