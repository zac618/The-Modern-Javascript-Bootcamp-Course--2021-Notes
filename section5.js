
let shoppingList = ['apples', 'orange', 'milk', 'bread'];

console.log(shoppingList); 

// access things in array

console.log(shoppingList[1]);

// modify array

// changing an array item
shoppingList[2] = 'Whole Milk';
console.log(shoppingList);

// adding an array item
shoppingList[4] = 'Ice Cream';
console.log(shoppingList);
// to add an item to the end without having to count how many items are present
shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Cereal';
console.log(shoppingList);

// Push - add to end
// Pop - remove from end
// Shift - remove from start
//  Unshift - add to start

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars',
];

topSongs.push('Fortunate Son');

topSongs.pop(); // Taking away the last item in array

console.log(topSongs);


let dishesToDo = ['big platter'];

dishesToDo.unshift('large plate');

dishesToDo.unshift('small plate');

console.log(dishesToDo);

// concat arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// arrayName.includes('example') is going to look in the array called "arrayName" for 'example' as an item
// returns True or False

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter',
]

if(ingredients.includes('flour')) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

// indexOf -- returns the first index at which a give nelement can be found in the array, or -1 if it is not present

console.log(ingredients.indexOf('shrimp'));
// prints 5 since that is where 'shrimp' is in the array

console.log(ingredients.indexOf('flour', 2));
// checks to see if 'flour' is in the array after index 2...then prints the index # if true


// join - creates a string from array
// reverse - reverses an array in place

let letters = ['R', 'E', 'S', 'P', 'E', 'C', 'T'];
console.log(letters.join('.'));
// the join.('.') joins the items of an array with a . between them


// slice - takes a portion of an array and creates a new array from it

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);
// console.log(`Swimmers: ${swimmers}`)
// this returns the new array created...the original array remains
let mammals = animals.slice(2, 6);
// console.log(`Mammals: ${mammals}`);
let reptiles = animals.slice(4, 6);
// console.log(`Reptiles: ${reptiles}`);
let quadruped = animals.slice(-3);
// this goes back 3 from the end of the array

console.log(`All Animals: ${animals}\n`
      +     `Swimmers: ${swimmers}\n` 
      +     `Mammals: ${mammals}\n` 
      +     `Reptiles: ${reptiles}\n`
      +     `4 Legged: ${quadruped}\n`
            );



// splice - remove/replace elements
// var arrDeletedItems = arrayName.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// insert something to animals array after shark

animals.splice(1,0,'octopus');
console.log(animals);
// this simply added 'octopus' after shark

animals.splice(3, 2,);
console.log(animals);
// deletes 'whale' and 'bear'

animals.splice(3,0,'snake', 'frog');
console.log(animals);
// inserting multiple values between salmon and lizard

animals.splice(0,2,'SHARK!', 'OCTOPUS!');
console.log(animals);
// replaces the first 2 with call caps versions

