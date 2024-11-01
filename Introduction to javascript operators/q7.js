//Q7. Write a Program in JavaScript to Calculate the Area of a Circle Given Its Radius Value of 10
// Area of a circle = π * radius * radius

function calculateAreaOfCircle(radius) {
  const pi = Math.PI; // Using JavaScript's built-in value for π
  return pi * radius * radius;
}

let radius = 10;
let area = calculateAreaOfCircle(radius);
console.log("Area of Circle:", area);
