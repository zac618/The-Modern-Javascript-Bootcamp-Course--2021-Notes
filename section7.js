
// Loops Loops Loops

// for loops

//  start @ 1 || stop @ 10 || add 1 each time
// for(let i = 1; i <= 10; i ++){
//     console.log('Hello:', i);
// };

// for (let i = 1; i <= 10; i += 3){
//     console.log('HELLO:', i);
// }

// for (let num = 1; num <= 20; num++){
//     console.log(`${num}x${num} = ${num * num}`);
// }

// for (let i = 50; i >=0; i -= 10){
//     console.log(i);
// }


// For Loops & Arrays

// const examScores = [98 , 77, 84, 91, 57, 66];
// for(let i = 0; i < examScores.length; i++){
//     console.log(i, examScores[i])
// }

// Using objects with a for loop
// const myStudents = [
//     {
//         firstName : 'Zeus',
//         grade     : 86
//     },
//     {
//         firstName : 'Artemis',
//         grade     : 97
//     },
//     {
//         firstName : 'Hera',
//         grade     : 72
//     },
//     {
//         firstName : 'Apollo',
//         grade     : 90
//     }
// ];

// for(let i = 0; i < myStudents.length; i++){
//     let student = myStudents[i]
//     console.log(`${student.firstName} scored ${student.grade}`)
// } 


// reverse a word with for loop

// const word = 'stressed';
// let reversedWord = '';
// for(let i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
// }
// console.log(reversedWord);

// countdown
// for(let i = 10; i >= 0; i--) {
//     console.log(`${i}!`);
// }
// console.log("Happy New Year!!")

// Nested Loops

// for(let i = 1; i <= 10; i++) {
//     console.log('OUTER LOOP:', i);
//     for(let j = 10; j >= 0; j-=2) {
//         console.log('    INNER LOOP:', j)
//     }
// }

// Example of Nested for Loop

// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32, 2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ];

// let totalScore = 0;
// for(let i = 0; i < gameBoard.length; i++){
//     let row = gameBoard[i];
//     for(let j = 0; j < row.length; j++) {
//         totalScore += row[j];
//     }
// }
// console.log(totalScore);

// WHILE LOOPS 

// for(let i = 0; i <= 5; i++){
//     console.log(i);
// }

// let j = 0;
// while(j <= 5) {
//     console.log(j);
//     j++;
// }

// Example of while loop

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while(guess !== target){
//     console.log(`Target: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log('CONGRATS YOU WIN!!');

// BREAKDOWN OF PREVIOUS EXAMPLE
// while (some condition)
// in the loop, update or attempt to make that condition false

// For...Of
// for(variable of iterable) {statement}

// Example of for...of
// let subreddits = ['soccer', 'popheads', 'cringe', 'books']
// ;
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(subreddits[i]);
// }

// for(let char of 'cockadoodledoo') {
//     console.log(char.toUpperCase());
// }

// Example of for...of
// const magicSquare = [
//     [2, 7, 6],
//     [9, 5, 1],
//     [4, 3, 8]
// ];

// for(let row of magicSquare){
//     let sum = 0;
//     for(let num of row){
//         sum += num;
//     }
//     console.log(`${row} summed to ${sum}`);
// }

