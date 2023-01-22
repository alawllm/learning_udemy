// setTimeout and setInterval

// passing in an argument and time interval after which will execute

// setTimeout(() => {
//     console.log('Hello!')
// }, 3000)

// console.log("Goodbye")

// Set interval - callback every x nr of miliseconds

// setInterval(() => {
//     console.log(Math.random())
// }, 2000)

// The filter Method

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// numbers.filter(n => {
//     return n < 4
// })

// const goodMovies = movies.filter(m => m.score > 80)

// filter AND map

movies.filter(movie => movie.score > 80).map(movie => movie.title)
