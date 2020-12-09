// 1. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
 var value = num;
 if (num ===0 || num ===1) 
 return 1;
 while (num > 1){
   num--;
   value *= num;
 } return value;
}

// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
  var min = n1;
  var max = n2;
  var number = (n2 - n1 + 1);
  var sum = number * (min + max) / 2;
  return sum;
}

// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and rtuen how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
  const min = start;
  const max = end;
  const number = divisor;
  if(min % number == 0 && max % number == 0){
    return 2;
  }else if(min % number == 0 && max % number !== 0){
    return 1;
  }else if(min % number !== 0 && max % number == 0){
    return 1;
  }else{
    return 0;
  }
  
}
