// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })

// for(let el of numbers){
//     console.log(el)
// }

// const movies = [{
//     title: 'Amadeus',
//     score: 100
// }, {
//     title: 'Siren',
//     score: 78
// }
// ]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// const titles = movies.map(function (movie) {
//     return movie.title;
// })

// ARROW FUNCTIONS

// const add = (x, y) => {
//     return x + y;
// }

// const square2 = (x) => {
//     return x * x;
// }

// // single parameter - no parenthesis ok

// const square = x => {
//     return x * x;
// }


// Arrow functions Implicit Returns

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// // implicit return!!!!

// const add = (a, b) => a + b;

// const movies = [{
//     title: 'Amadeus',
//     score: 100
// }, {
//     title: 'Siren',
//     score: 78
// },
// {
//     title: 'Harry Potter',
//     score: 65
// },
// {
//     title: 'Wizard of Oz',
//     score: 70,
// }
// ]

// const rate = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// we dont neew the function keyword, we dont need the return 

// const rate = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// )
// )
