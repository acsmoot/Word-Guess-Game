//Choose a theme for your game!
//array u ready for some football questions
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

//get the game started
// start the game
//give directions to start the game
var directionsText = document.getElementById("directions-text");
directionsText.textContent = "Press any key to get started!";
document.onkeypress = function() {
  console.log("game has started");
  directionsText.textContent = "";
  startGame();
};

//variables
var footballQuestion = document.getElementById("footballQuestion-text");
console.log(footballQuestion);

//choose a random football question
function startGame() {
  var randomQuestion =
    footballQuestions[Math.floor(Math.random() * footballQuestions.length)];
  console.log(randomQuestion);
  footballQuestion.textContent =
    "Please answer the following football question: " + randomQuestion;
  getFootballKey(randomQuestion);
}
//////////

//get the index of the random question as the key

//  var key="Real Name";

//  index=joanOfArcInfoParts.indexOf(key);
//  var info=joanOfArcInfoValues[index];
//  console.log(key, index, info);
//
/////
function getFootballKey(randomQuestion) {
  for (index = 0; index < footballQuestions.length; index++) {
    if (randomQuestion === footballQuestions[index]) {
      console.log(index);
      getFootballAnswer(index);
    } 
    // else {
    //   alert("answer was not present in array");
    // }
  }
}
// then get the answer by looping through football answer with the index matching the random question
function getFootballAnswer(key) {
 // var maskedAnswer = "";
  var answer = footballAnswer[key];
  //alert(answer);
  console.log(answer);
  maskFootballAnswer(answer);
}

function maskFootballAnswer(answer){
 //convert answer into a character array
 // assigned maskedanswer    to characters
 //Display answer as `**********` or `????????`
 //    If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
var maskedAnswer="";
var arrayAnswer = [];
arrayAnswer = answer.toCharArray();
console.log(arrayAnswer);


// using the answer as an array
// have the array.length be Total number of guesses
// each guess is logged
//Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
// /var guessedChars = "";
// if guess is wrong
    //guesscounter is decremented unti guesses is 0 then increment loss

//    As the user guesses the correct letters, reveal them: `m a d o _  _ a`    
//if guess is right
    // guesscounter not decremented
    // loop through answer and replace maskchar for char in arrayAnswer


//no more maskchar then increment wins


}
//Display initall table with zeros
// (# of times user guessed word correctly).
var wins = 0;
var winsText = document.getElementById("wins-text");
winsText.textContent = +wins;

// (# of times user has lost the game).
var losses = 0;
var loseText = document.getElementById("losses-text");
loseText.textContent = +losses;

//Number of Guesses Remaining: (# of guesses remaining for the user).
//Decrement from the total number of letters in the answer
//guesscount will initalize to the total number of characters in the answer
var guessCount = 0;
var guessCountText = document.getElementById("guess-remain");
guessCountText.textContent = +guessCount;


//select the element from the DOM

//sat class notes
//using doucment
// var asterSpan=document.getElementById("asterisks");
// console.log(asterSpan);
// var asterword="";
//for loop the answer.length
//add it to the emptyword;
///asterspan.innertext = asterword;
//console.log(asterword)
