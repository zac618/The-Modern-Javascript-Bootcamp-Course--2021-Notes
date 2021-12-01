/*
NEW MISCELLANEOUS FEATURES
- rest & spread
- destructuring
- default function parameters
*/

/*
DEFAULT FUNCTION PARAMETERS
JS allows us to predefine default parameters when they are
not provided in the call
*/

/* This was the old way of doing it
function oldFunc(a, b) {
    if (typeof a === "undefined") {
        a = "default value" // Here we assign what would be the default value
    }
    // Shorter old way
    b = typeof b === "undefined" ? "default value" : b
    // Do some other stuff
    console.log(b)
}
oldFunc()

// This is the new and compact way of doing it
function newFunc(a = "default value", b = 23) {
    // Do some other stuff
    console.log(a)
    console.log(b)
}
newFunc()
newFunc(67)
newFunc("yo", "wassup")

Also works with arrow functions
const newArrow = (x="Hello", y="friend") => console.log(`${x}, ${y}!`)
newArrow()
*/

/*
SPREAD
spreads the contents of an iterable to the destination
Analogue to Python's unpacking
To spread a common iterable (like an array), the operator ... is used.
A string is also an iterable, and ... spreads into characters.
If the iterable is longer than the quantity of arguments needed,
only the first ones will be considered (rest is discarded).
*/

// Array spread example
// const numbers = [1,54.3,23,5,4,3212,67,432,3,5,643,2,21]
// Math.max(numbers) // Outputs NaN (accepts numbers as parameters, not an array)
// Math.max(...numbers) // Outputs 3212 (correct answer)

// // spread can be used to generate arrays
// const veggies = ["potato", "aubergine", "courgette", "lettuce", "cabbage"]
// const arrayFromSpread = [...numbers, ...veggies]
// console.log(arrayFromSpread)

// // Making a shallow copy becomes easy
// const numbersCopy = [...numbers]
// console.log(numbers === numbersCopy) // references are different

// // Spread can be used over objects
// const testObject = {
//     prop1 : 123,
//     prop2 : "something",
//     extraProp : ["this", "is", "an", "array"]
// }

// const spreadedObject = {
//     ...testObject,
//     anotherProp : 492,
//     yetAnotherProp : "last one",
//     prop1 : "seventeen" // Note you can overwrite
// }

// console.log(spreadedObject)

// // Just as before it is possible to make shallow copies of objects with spread

