// Functions in Detail

// let and const have different scoping rules than var

// var is global
// let and const are confined to their block

// Functions can be used in arrays

// function add(x,y) {
//     return x + y;
// }

// const subtract = function (x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// const divide = function (x, y) {
//     return x / y;
// }

// const operations = [add, subtract, multiply, divide];

// console.log(operations[0](100, 4));
// console.log(operations[1](100, 4));
// console.log(operations[2](100, 4));
// console.log(operations[3](100, 4));

// // to loop over array with function

// for(let func of operations) {
//     let result = func(30, 5);
//     console.log(result);
// }

// const thing = {
//     doSomething: multiply
// }


// Higher Order Functions
// -- functions that operate on/with other functions
// they can accept other functions as arguments and/or return a function

// function callThreeTimes(f){
//     f();
//     f();
//     f();
// }

// function cry() {
//     console.log("BOO HOO I'M SO SAD!");
//  }

// function rage() {
//         console.log("I HATE EVERYTHING!");
//      }


// function repeatNTimes(action, num){
//     for(let i = 0; i < num; i++){
//         action();
//     }
// }

// repeatNTimes(rage, 13);

// returning functions with functions

// function multiplyBy(num){
//     return function (x) {
//         return x * num;
//     }
// }

// const triple = multiplyBy(3);
// const double = multiplyBy(2);
// const halve = multiplyBy(0.5);

// function makeBetweenFunc(x,y){
//     return function(num){
//         return num >= x && num <= y;
//     }
// }

// // makeBetweenFunc(0,18);

// const isChild = makeBetweenFunc(0, 18);

// const isInNineties = makeBetweenFunc(1990, 2000);

// Callbacks example

// function grumpus() {
//     alert("GAHHHH GO AWAY!")
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', grumpus);

