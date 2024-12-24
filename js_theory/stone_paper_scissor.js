// backend for the stone paper scissor game

console.log("hello world")
var userScore = 0;
// var name = prompt("what is your name?");
// alert("Hello " + name + " Let's play the game");

// 1. Get the user choice
function userChoice(userChoice){
  var computerChoice = getComputerChoice();

  var userChoiceTag = document.getElementById("your-choice");
  var computerChoiceTag = document.getElementById("computer-choice");

  userChoiceTag.innerHTML = userChoice;
  computerChoiceTag.innerHTML = computerChoice;

  if(userChoice === computerChoice){
    document.getElementById("result").innerHTML = "The game is a tie!";
  }
  else if(userChoice === "stone"){
    if(computerChoice === "paper"){
      document.getElementById("result").innerHTML = "Computer won!";
      userScore = userScore - 1;
    }else{
      document.getElementById("result").innerHTML = "You won!";
      userScore = userScore + 1;
    }
  }
  else if(userChoice === "paper"){
    if(computerChoice === "scissor"){
      document.getElementById("result").innerHTML = "Computer won!";
      userScore--;
    }else{
      document.getElementById("result").innerHTML = "You won!";
      userScore++;
    }
  }
  else if(userChoice === "scissor"){
    if(computerChoice === "stone"){
      document.getElementById("result").innerHTML = "Computer won!";
      userScore--;
    }else{
      document.getElementById("result").innerHTML = "You won!";
      userScore++;
    }
  }

  var userScoreTag = document.getElementById("user-score");
  userScoreTag.innerHTML = userScore;

}

// 2. Get the computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'stone';
    case 1:
      return 'paper';
    case 2:
      return 'scissor';
  }
};

// // 3. Determine the winner
// const determineWinner = (userChoice, computerChoice) => {
//   if (userChoice === computerChoice) {
//     return 'The game is a tie!';
//   }
//   if (userChoice === 'stone') {
//     if (computerChoice === 'paper') {
//       return 'Computer won!';
//     } else {
//       return 'You won!';
//     }
//   }
//   if (userChoice === 'paper') {
//     if (computerChoice === 'scissor') {
//       return 'Computer won!';
//     } else {
//       return 'You won!';
//     }
//   }
//   if (userChoice === 'scissor') {
//     if (computerChoice === 'stone') {
//       return 'Computer won!';
//     } else {
//       return 'You won!';
//     }
//   }
// };

// // 4. Start the game
// const playGame = () => {
//   const userChoice = getUserChoice('stone');
//   const computerChoice = getComputerChoice();
//   console.log('You threw: ' + userChoice);
//   console.log('The computer threw: ' + computerChoice);
//   console.log(determineWinner(userChoice, computerChoice));
// };

//playGame();
// Output:
// You threw: stone
// The computer threw: scissor
// You won!


// 1. Get the user choice : basicaslly listening to the user input



