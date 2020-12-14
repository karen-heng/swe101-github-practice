// Generates random number 0,1,2.
var randomWordGenerator = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var computerChoice = randomInteger;
  return computerChoice;
};
// Tracking the number of wins in a global variable.
var noOfWins = 0;

var main = function (input) {
  var myOutputValue = '';
  var computerChoice = randomWordGenerator();
  // Allocating each random number to an item.
  if (computerChoice == 0) {
    computerChoice = 'banana';
  } if (computerChoice == 1) {
    computerChoice = 'chisel';
  } else if (computerChoice == 2) {
    computerChoice = 'faucet';
  }
  console.log(computerChoice);
  // Incrementing the number of wins based on winning condition.
  if (input == computerChoice) {
    noOfWins = noOfWins + 1;
    myOutputValue = 'You win, your guess was ' + input + ' and computer guessed ' + computerChoice + '. You need to guess correctly one more time.';
    // If previous condition is true, the number of wins goes to 2.
    if (noOfWins == 2) {
      myOutputValue = 'Your guess was ' + input + ' and computer guessed ' + computerChoice + '. You won as you have 2 correct guesses!';
    }
  }
  // No incrementation if condition is false.
  if (input != computerChoice) {
    myOutputValue = 'Your guess was ' + input + ' and computer guessed ' + computerChoice + '. You need to guess correctly two more times.';
  }
  console.log(myOutputValue);
  return myOutputValue;
};