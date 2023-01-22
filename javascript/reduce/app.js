// REDUCE - executes a reducer function on each element of the Array,
// resulting in a single value 

const prices = [9.99, 1.50, 19.44, 54.99, 30.4]

// let total = 0;
// for (let price of prices) {
//     total += price
// }

// console.log(total)

// takes in two variables - accumulator and current price

// const total = prices.reduce((total, price) => {
//     return total + price
// })

// does exactly the same thing with an arrow function
// const total = prices.reduce((total, price) => total + price
// )

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })

// looking for highest rated in an object

// const highestRated = movies.reduce((bestMovie, currMovie) => {
//     if (currMovie.score > bestMovie.score) {
//         return currMovie;
//     }
//     return bestMovie;
// })

// initial starting point for the accumulator parameter can be specified

// const evens = [2, 4, 6, 8, 10]

// evens.reduce((sum, num) => sum + num, 100)

// ARROW FUNCSIONS / THIS 

// this - here relates to the object inside of the same function 

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// arrow function version

// keyword this behaves differently in arrow functions
// does not create a level difference

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: () => {
        setTimeout(function () {
            console.log(this.fullName())
        }, 3000)
    }
}