// function singSong() {
//     console.log("do")
//     console.log("re")
//     console.log("mi")
// }

// singSong()

// function greet(firstName) {
//     console.log(`halloechen ${firstName}`)

// }


// function rant(message) {
//     let num = 0;
//     while (num < 3) {
//         num++;
//         console.log(`${message.toUpperCase()}`)
//     }
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}!`)
// }

// repeat('hi', 3)

// function hello(inputText, thisMany) {
//     let greeting = ''
//     for (let i = 0; i < thisMany; i++) {
//         greeting += inputText
//     }
//     console.log(greeting)
// }

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
}