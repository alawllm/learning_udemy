// takes another function as an argument and executes it twice
// as is stated inside of the function

// function callTwice(func) {
//     func();
//     func();
// }

// takes another function as an argument
// and executes it according to the loop 10 times

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }


// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// } 




// function rollDie will be executed 10 times 
// as is stated in the loop 

// callTenTimes(rollDie)

// function makeMysteryFunc() {
//     const rand = Math.random()
//     if (rand > 0.5) {
//         return function () {
//             console.log('congrats!! i am a good function')
//             console.log('congrats!! i am a good function')
//         }
//     } else {
//         return function () {
//             alert('you have been infected by a computer virus!!!')
//             alert('no no no');
//         }
//     }
// }

// Factory function!

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }



// makeBetweenFunc(50, 100) =>

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }

// Methods 
// functions added as properties on objects
// object MyMath 

// myMath.square - gives the function
// myMath.square(2)

// const myMath = {
//     PI: 3.14159,
//     multiply(num1, num2) {
//         return num1 * num2;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }


// THIS

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish',
//     meow() {
//         console.log(`${this.name} says MEOW`);
//     }
// }

// const meow2 = cat.meow;

// TRY / CATCH

// in case if try doesnt run catch will be executed

try {
    hello.toUpperCase()
} catch {
    console.log('ERROR!')
}