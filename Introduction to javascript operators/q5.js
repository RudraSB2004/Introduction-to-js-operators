//Q5. Write a JavaScript Program That Calculates the Simple Interest Using the Formula
// Simple Interest = (principal * rate * time) / 100

function calculateSimpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

let principal = 1000;
let rate = 5;
let time = 2;
let simpleInterest = calculateSimpleInterest(principal, rate, time);
console.log("Simple Interest:", simpleInterest);
