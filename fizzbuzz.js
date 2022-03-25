var mult3 = "Fizz"
var mult5 = "Buzz"

// Works based on 0 being falsy
// Anything other than 0 returns true 

for (var count = 1; count < 101; count++) {
  if (!(count % 3 || count % 5)) {  // count is neither a multiple of 3 nor 5
    console.log(mult3+mult5);
  }
  else if (!(count % 3)) {          // count is not a multiple of 3
    console.log(mult3);
  }
  else if (!(count % 5)) {          // count is not a multiple of 5
    console.log(mult5);
  }
  else {                            // fall-back/default statement
    console.log(count);
  }
}