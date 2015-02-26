/*
The program should print out each number from 1 to 100,
replacing numbers divisible by both 3 and 5 with “fizz buzz”,
those divisible by 3 with “fizz”,
and those divisible by 5 with “buzz”.
*/

$(document).ready(function() {
  for (var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
      $('body').append(" fizz-buzz ");
    } else if (i % 5 == 0){
      $('body').append(" buzz ");
    } else if (i % 3 == 0){
      $('body').append(" fizz ");
    } else {
      $('body').append(" " + i + " ");
    }
  };
});


// for (var i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//       console.log("fizz buzz");
//     } else if (i % 5 == 0){
//       console.log("buzz");
//     } else if (i % 3 == 0){
//       console.log("fizz");
//     } else {
//       console.log(i);
//     }
//   }