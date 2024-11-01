//Q6. Write a JavaScript Program to Calculate the Body Mass Index (BMI) Using the Formula
// BMI = weight (kg) / (height * height) (height in meters)

function calculateBMI(weight, height) {
  return weight / (height * height);
}

let weight = 70; // kg
let height = 1.75; // meters
let bmi = calculateBMI(weight, height);
console.log("BMI:", bmi);
