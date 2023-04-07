// 1. Write a JavaScript program that accepts two numbers in two prompts and
//displays the larger one in the console

// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");
// if (num1 > num2){
//     console.log("num1 is larger than num2");
// } else if (num2 > num1){
//     console.log("num2 is larger than num1");
// }else{
//     console.log("both number is equal");
// }

// ____________________________________________________________________________________


// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -


// let num = prompt("Enter a number:");

// if (num > 0) {
//   alert("The sign is +");
// } else if (num < 0) {
//   alert("The sign is -");
// } else {
//   alert("The number is zero.");
// }

// _______________________________________________________________________________________


// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");
// let num3 = prompt("Enter the third number");
// let num4 = prompt("Enter the fourth number");
// let num5 = prompt("Enter the fifth number");

// let largest = num1;

// if (num2 > largest) {
//   largest = num2;
// }

// if (num3 > largest) {
//   largest = num3;
// }

// if (num4 > largest) {
//   largest = num4;
// }

// if (num5 > largest) {
//   largest = num5;
// }

// console.log("The largest number is  " + largest);

//___________________________________________________________________________________


// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log("even " + i);
//   } else {
//     console.log("odd  " + i);
//   }
// }

// __________________________________________________________________________________


// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A
 
// ___________________________________________________________________________________

// 6 .Write a JavaScript program which iterates the integers from 1 to 100. But for multiples 
// of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print"FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// ______________________________________________________________________________________


// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  pattern = "";
  for (let j = 1; j <= i; j++) {
   pattern += "* ";
  }
  console.log(pattern);
}
