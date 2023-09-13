// USER INPUT & CONDITIONAL
// STATEMENT

// var cityName = prompt("Enter your City")
// if( cityName ="Karachi"){
//     alert("Welcome to city of Lights")
// }
// // Q:02
// var gender =prompt("enteryour your gender")
// if(gender = "male"){
//     alert("welcome to Sir")
// }
// var gender =prompt("enter your gender")
// if(gender = "female"){
//     alert("Welcome to mam")
// }
// Q: 03
// var colorName = prompt("trafaic Color")
// if(colorName="red"){
//     alert("Must stop")
// }
// var colorName = prompt("trafaic Color")
// if(colorName="yellow"){
//     alert("Ready to Move")
// }
// var colorName = prompt("trafaic Color")
// if(colorName="red"){
//     alert("Move now")
// }
// Q:04
// var carFuel =+prompt("check your fuel")
// if(carFuel<=0.25){
//     alert("please refill the fuel in your car")
// }
// Q:05
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var c = 12;
// if (++c === 13){
// alert("condition 1 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
//     alert("True");
//     }
//     if("car" < "cat"){
//         alert("car is smaller than cat");
//         }
// Q:06
// var firstSubject = +prompt("Enter first Subject marks");
// var SecondSubject = +prompt("Enter Second Subject marks");
// var ThirdSubject = +prompt("Enter third Subject marks");
// var totalMarks = +prompt("Enter total subject marks");
// var obtMarks = firstSubject + SecondSubject + ThirdSubject;
// var percentage = (obtMarks / totalMarks) * 100;
// var percentage = +prompt("Enter your percentage");

// if (percentage >= 80 && percentage <= 100) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "A+");
// } else if (percentage >= 70 && percentage <= 80) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "A");
// } else if (percentage >= 60 && percentage <= 70) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "B");
// } else if (percentage >= 50 && percentage <= 60) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "C");
// } else if (percentage >= 40 && percentage <= 50) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "D");
// } else if (percentage >= 33 && percentage <= 40) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "E");
// } else if (percentage >= 0 && percentage <= 33) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "F");
// } else {
//   alert("Please enter correct percentage...");
// }
// Guess The Game
// Q:06
// var number = +prompt("enter number")
// if (number===8)
// {
//     alert("bingo! Correct")
// }
// else{
//     alert("try again")
// }
// // Q:09
// var number = +prompt("Enter your number");

// if (number % 2 === 0) {
//   alert("even number");
// } else if (number % 3 === 0) {
//   alert("odd number");
// } else {
//   alert("neither ever nor odd number..");
// }
// Q:10
// Write a program that takes temperature as input and
// shows a message based on following criteria
// var temperature =prompt("check the temperature")
// if (temperature =">40"){
//     alert("it is too hot outside")
// }
// var temperature =prompt("check the temperature")
// if (temperature =">30"){
//     alert("Today weather is normal")
// }
// var temperature =prompt("check the temperature")
// if (temperature =">20"){
//     alert("Today weather is cold")
// }
// var temperature =prompt("check the temperature")
// if (temperature =">10"){
//     alert("OMG! today weather is so cold")
// }
// Q:11
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// var num1 = +prompt("enter first value");
// var operator = prompt("enter your operator");
// var num2 = +prompt("Enter second value");

// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alert(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// }
// IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS
// function compareAndDisplayLarger(num1, num2) {
//     if (num1 > num2) {
//       alert(`${num1} is larger.`);
//     } else if (num2 > num1) {
//       alert(`${num2} is larger.`);
//     } else {
//       alert("Both integers are equal.");
//     }
//   }

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  alert = ("Good evening");
}