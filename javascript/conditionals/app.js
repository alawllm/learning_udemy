// console.log("BEFORE CONDITIONAL")
// let random = Math.random();
// if (random < 0.5) {
//     console.log("your number is less than 0.5")
// } else { console.log("Your number is greater or equal than 0.5") }
// console.log(random);

// const dayOfWeek = prompt("Enter a day").toLowerCase()

// if (dayOfWeek === 'monday') {
//     console.log("I HATE MONDAYS")
// }
// else if (dayOfWeek === 'saturday') {
//     console.log("YES I LOVE SATURDAYS")
// }
// else if (dayOfWeek === 'wednesday') {
//     console.log("uhhhh wednesday")
// }
// else {
//     console.log("uhhhh")
// }

// 0-5 FREE 
// 5-10 CHILD PRICE $4
// 10-65 ADULT $10
// 65+ SENIOR $4

// const age = 100;
// if (age < 5) { console.log("You are a child you get for free") }
// else if (age < 10) { console.log("Yeah pay me 4$") }
// else if (age < 65) { console.log("You are an adult, you pay 10$") }
// else console.log("You are a senior you pay 4$")

const password = prompt("please enter a password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) { console.log("Valid password") }
    else { console.log("Password cannot contain spaces") }
}

else { console.log("Password too short, must be 6+ characters") }

