// Apply functions to Collections of Data
// Array callback methods

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function(num){
//     console.log(num);
// })

// function printTriple(n){
//     console.log(n * 3);
// }

// numbers.forEach(printTriple);

// THE MAP() METHOD CREATES A NEW ARRAY POPULATED WITH THE RESULTS OF CALLING A PROVIDED
// FUNCTION ON EVERY ELEMENT IN THE CALLING ARRAY

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy'];

// // create a new array that doubles the values in the original array
// // const doubles = numbers.map(function(num) {
// //     return num * 2;
// // })

// // console.log(numbers);
// // console.log(doubles);
// // // expected output would be the original 'numbers' array followed by the 'doubles' array

// // create a new array that contains an object for each element and checks if even

// // const numDetail = numbers.map(function(n) {
// //     return{
// //         value: n,
// //         isEven: n % 2 === 0
// //     }
// // })

// // create a new array that is all caps and has periods between letters from words

// const abbrevs = words.map(function(word) {
//     return word.toUpperCase().split('').join('.');
//     })


/* ARROW FUNCTIONS
 A more compact way to define small functions

let compactFunction;
// this:
compactFunction = function (x) {return x * x}
// is the same as:
compactFunction = x => x*x
// When it consist of only one statement, the return is implicit
 */

// const square = function(x) {
//     return x * x;
// }
// // THIS IS THE SAME THING AS:

// const square = (x) => {
//     return x * x;
// }

// with arrow functions, parens are optional if there's only 1 parameter:
// const square = x => {
//     return x * x;
// }
// // Use empty parens for functions w/ no parameters:
// const singASong = () => {
//     return "LA LA LA LA LA LA";
// }

// IMPLICIT RETURN

// const square = n => {
//     return n*n;
// }
// const square = n => (
//     n * n
// )
// const square = n => n * n;
// // these 3 do the same exact thing...just less code on the 2nd one

// example of Implicit Return

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const doubles1 = nums.map(function (n) {
//     return n * 2;
// })
// const doubles2 = nums.map(n => {
//     return n * 2;
// })
// const doubles3 = nums.map(n => n * 2)
// // these 3 do the same exact thing

// ARRAY.FIND

// let movies = [
//     "The Fantastic Mr. Fox",
//     "Mr. and Mrs. Smith",
//     "Mrs. Doubtfire",
//     "Mr. Deeds"
// ]

// const movie = movies.find(movie => {
//     return movie.includes('Mrs');
// })

// array.filter
// returns a filtered array with values that approved (returned true)

// const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//const odds = numArray.filter(n => n % 2 !== 0)
//console.log(odds)

/* every
// returns boolean checking if every element in the array pass the test
const words = ["dog", "dig", "log", "bag", "wag"];
console.log(words.every(word => word.length === 3))
console.log(words.every(word => word[word.length - 1] == "g"))
*/

/* some
// returns boolean checking if at least one element in the array pass the test
console.log(words.some(word => word[0] == "d"))
console.log(words.some(word => word[0] == "k"))
*/

// sort
// sort by default orders alphabetically, but can receive a function as a 
// parameter. The callback function receives 2 parameters and works as follows:
// Let's call the function compareFunc and the parameters a and b
// if compareFunc(a, b) returns a number < 0:
//      a goes before b
// if compareFunc(a, b) returns number 0:
//      a remains unchanged with respect to b
// if compareFunc(a, b) returns a number > 0:
//      a goes after b
// Note that the operation mutates the array in-place

// const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
// const sortedPrices = prices.sort((a, b) => a - b)
// console.log(sortedPrices)
// console.log(sortedPrices === prices)

// reduce
// Analogue to Python's functools.reduce function
// Passes all the elements in an array through the function
// Besides the function, an initial value can be provided
// Returns a single value

// const testArray = [3, 12, 23, 58, 11, 23, 0];
// let sum = testArray.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(sum)

// let arrayMax = testArray.reduce((a, b) => a >= b ? a : b)
// console.log(arrayMax)

// let arrayMin = testArray.reduce((a, b) => a < b ? a : b)
// console.log(arrayMin)

// providing an initial value

// arrayMin = testArray.reduce((a, b) => a < b ? a : b, -23)
// console.log(arrayMin)
