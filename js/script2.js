






$(document).ready(function fizzlebizzle(userNum) {

 var userNum = parseInt(prompt("What's your number?"));

  

    for (var i = 1; i <= userNum; i++){
      if(i % 3 == 0 && i % 5 == 0){
        $('.fizzbuzz').append(" Fizz-Buzz ");
      } else if (i % 5 == 0){
        $('.fizzbuzz').append(" Buzz ");
      } else if (i % 3 == 0){
        $('.fizzbuzz').append(" Fizz ");
      } else {
        $('.fizzbuzz').append(" " + i + " ");
      }
    }

  function check(userNum){
    if (parseInt(userNum) != 'number'){
      prompt("Enter a single number without non-numerical characters")
    }
  }
//   else if (typeof userNum !== 'number') {
//   prompt("Please enter a number without non-numerical characters.")
// }

});