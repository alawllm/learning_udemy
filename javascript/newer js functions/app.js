// Detault Params

// function rollDie(numSides) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// default numSides if its not passed in 


// old way of doing things
// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// syntax with the default

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// watch out for order!

// function greet(person, msg = 'Hey there!', punc = '!!!') {
//     return `${msg}, ${person}! ${punc}`
// }

// Spread in function calls
// expands an iterable into a list of arguments

// Math.max(...nums) - changes the array nums into separate args

// Spread with array literals

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]
