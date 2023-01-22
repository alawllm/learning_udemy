//Variable okreslone w funkcji moze byc tylko z niej dostepne!

// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs)
// }

//Global variable updated inside of the function!

// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
//Variable zaktualizowane wewnatrz funkcji!


// Wewnatrz funkcji - drukowane wg variable ktore jest Wewnatrz
// bardziej specyficzne variable nadpisuje
// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch()

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HI'
// }

// console.log(radius);
// console.log(PI)

// function bankRobbery() {
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther']
//     function cryForHelp() {
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`Please heelp uuus, ${hero.toUpperCase()}`)
//             }

//         }
//     }
//     cryForHelp();
// } 

// FUNCTION EXPRESSIONS

const add = function (x, y) {
    return x + y;
}