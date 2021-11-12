if (1 === 1) {
    console.log("It's True!");
}

// Example 2
// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?


let rating = 3

if(rating === 3){
    console.log("YOU ARE A SUPERSTAR");
}

else if(rating === 2){
    console.log("You are meeting expectations");
}

else if(rating === 1){
    console.log("You could use some improvement")
}

else if(rating === 0){
    console.log("WTF?")
}
else {
    console.log("INVALID RATING")
}

// Example 2 

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
    console.log(`Congrats, you now have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(
        `Good game, but your score of ${userScore} did not beat the high score of ${highScore}`);
}


// Nesting Conditions
// Example

let password = 'Hello There';


if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Valid Password!");
    }
    else{
        console.log('Password is long enough, but cannot contain spaces');
    }
}
else{
    console.log("Password must be longer!");
}


// Truthy & Falsy Values
// All values have an inherent truthy or falsy boolean value
// Falsy values are false, 0, "" (empty string), null, undefined, and NaN
//   Everything else is truthy! 


// Example
// If mystery is valid number, this will print 'TRUTHY'...but if 0 or any other false value, it will print 'FALSY'

let mystery = 5;

if(mystery){
    console.log('TRUTHY');
}
else{
    console.log('FALSY');
}

// Logical Operator AND (&&)

// Example

let password2 = 'taco Tuesday';

if(password2.length >= 6 && password2.indexOf(' ') != -1){
    console.log('PASSWORD CANNOT CONTAIN SPACES');
}
else{
    console.log('VALID PASSWORD');
}

// Example 2 (Is number within specified range?)

let num = 3;

if(num >= 1 && num <= 10){
    console.log('NUMBER IS BETWEEN 1 AND 10');
}
else{
    console.log('PLEASE GUESS A NUMBER BETWEEN 1 AND 10');
}

// Logical Operator OR (||)
// If eithr side is true, then line is considered true

// Example...selling tickets to event. 6 years old & younger free, 65 years and older are free

let age = 26;
let admission = '10';

if(age <= 6 || age >= 65){
    console.log('YOU GET IN FOR FREE!!')
}
else{
    console.log(`THAT WILL BE $${admission} PLEASE!`)
}

// Example...checking to see if color is purple

let color = "purple";
if(color === 'purple' || color === 'lilac' || color === 'violet'){
    console.log('GREAT CHOICE')
}
else{
    console.log('PICK A BETTER COLOR');
}

// Logical Operator NOT (!)

// Example > If there isn't a logged in user, then do something

let loggedInUser;

if(!loggedInUser){
    console.log('GET OUT OF HERE!');
}


let flavor = 'grape';

if(flavor !== 'grape' && flavor !== 'cherry'){
    console.log("wE DON'T HAVE THAT FLAVOR")
}
// The Switch Statement

let day = 5;

switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('INVALID DAY')

    }


// Ternary Operator
// condition ? expIfTrue: expIfFalse
// if condition is true, this code runs....otherwise, this other code runs

let num5 = 7;

num5 === 7 ? console.log('lucky!') : console.log('BAD');

let status = 'online';
//let color55;

let color55 = status === 'offline' ? 'red' : 'green';
 console.log(color55);