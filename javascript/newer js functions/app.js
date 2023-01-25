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

// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats, ...dogs]


// Spread in object literals
// - used to copy properties from one object
// into another object
// 
// const feline = { legs: 4, family: 'Felidae' };
// const canine = { isFurry: true, family: 'Caninae' }

// if 2 after another the last one wins

// {...[2,3,4,5,6]}
// {0: 2, 1: 3, 2: 4, 3: 5, 4: 6}
// {...'HIIII'}
// {0: 'H', 1: 'I', 2: 'I', 3: 'I', 4: 'I'}

// const dataFromForm = {
//     email: 'blabla@gmail.com',
//     passwoed: 'bebebe',
//     username: 'tfunke'
// }

// const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

// newUser
// {email: 'blabla@gmail.com', passwoed: 'bebebe', username: 'tfunke', id: 2345, isAdmin: false}

// Rest Params

// Arguments

// function sum() {
//     console.log(arguments)
// }


// this doesnt work!! arguments is not an array
// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// REST - collects all remaining arguments and puts them
// into an array

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

// ... collects an array 
// collecting things in into an array 

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`Gold medal goes to: ${gold}`)
//     console.log(`Silver medal goes to: ${silver}`)
//     console.log(`And thanks to everyone else ${everyoneElse}`)
// }