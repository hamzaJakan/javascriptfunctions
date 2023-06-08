let num1
let num2
let num3
function largestOfThree(num1, num2, num3) {
  let largest = num1;
  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }
  return largest;
}