// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must: 
//   - be at least 8 characters
//   - cannot contain spaces
//   - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr'); //true

//isValidPassword('dogLuvr123!', 'dogLuvr') //false

// function isValidPassword(password, username){
//     if(password.length < 8){
//         return false;
//     }
//     if(password.indexOf(' ') !== -1){
//         return false;
//     }
//     if(password.indexOf(username) !== -1){
//         return false;
//     }
//     return true;
// }

// PRACTICE
// Write a function to find the average value in an array of numbers
// avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2


// function avg(arr){
//     let total = 0;
//     //loop over each num
//     for(let num of arr){
//         //add them together
//         total += num;
//     }
//     //divide by number of nums
//     return total/arr.length;
//     } 

// A pangram is a sentence that contains every letter of the alphabet, like: 
// "The quick brown fox jumps over the lazy dog"

//Write a function called isPangram, which checks to see if a given sentence contains
// every letter of the alphabet. Make sure you ignore string casing!

//isPangram('The five boxing wizards jump quickly') //true
//isPangram('The five boxing wizards jump quick') // false

// function isPangram(string){
//     let lowerCased = sentence.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (lowerCased.indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;
// }

// const value = [2,3,4,5,6,7,8,9,10,'J','Q','K,','A'];
// const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

// //function drawnCard(value, suit) {
//     const randomValue = value[Math.floor(Math.random() * value.length)];
//     //console.log(randomValue, value[randomValue]);

//     const randomSuit = suit[Math.floor(Math.random() * suit.length)];
//     //console.log(randomSuit, suit[randomSuit]);

//     console.log(` ${randomValue} of ${randomSuit}`);

function pick(arr){
    //return random element from arr
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const value = [2,3,4,5,6,7,8,9,10,'J','Q','K,','A'];
    const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

    return {value: pick(value), suit: pick(suit)}; 
}