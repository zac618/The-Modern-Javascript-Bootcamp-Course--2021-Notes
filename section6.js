const student = {
    firstName   : 'David',
    lastName    : 'Jones',
    strengths   : ['Music', 'Art'],
    exams       : {
        midterm  : 92,
        final   : 88
    }

}; 

const avg = (student.exams.midterm + student.exams.final)
    /2;

console.log(avg);


const shoppingCart = [
    {
        product : 'Jenga Classic',
        price   : 6.88,
        quantity: 1
    },
    {
        product : 'Echo Dot',
        price   : 29.99,
        quantity: 3
    },
    {
        product : 'Fire Stick',
        price   : 39.99,
        quantity: 2
    }
];

echoDotTotal = (shoppingCart[1].price * shoppingCart[1].quantity);
console.log(echoDotTotal);


let nums = [1,2,3];
let mystery = [1,2,3];
// these are not equal to each other, bc while they have the same numbers, they are 
// pointing to different places to find the data

let moreNums = nums;
// this will make moreNums equal the same as nums because they are pointing to same place

