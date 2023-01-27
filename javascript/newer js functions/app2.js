// destructuring
// clean way to 'unpack' values from arrays / properties from objects

// const scores = [43635, 7553754, 67564, 66547, 657464, 275368];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// shorter way - saves first one as gold, second one as silver

// ...everyoneElse - contains the rest - who was not called out 
// all based upon positionbbbv

// const [gold, silver, ...everyoneElse] = scores;

// Destructuring from objects

const user = {
    email: 'harvey@gmail.com',
    password: 'vrvdbfdbvdx',
    firstName: 'Harry',
    lastName: 'Potter',
    born: 1970,
    died: 2010,
    city: 'San Francisco',
    state: 'California'
}

// obvious way
// const firstName = user.firstName;
// const lastName = user.lastName;

// makes 3 separate variables
// doesnt change the original object in any way
// const { email, firstName, lastName } = user;


// makes a variable called birthYear
// const { born: birthYear } = user;

// const user2 = {
//     email: 'bianca@gmail.com',
//     firstName: 'Bianca',
//     lastName: 'Maslowska',
//     born: 1974,
//     city: 'San Francisco',
//     state: 'California'
// }

// if info doesnt exist (died) its undefined
// const { city, state, died } = user2

// const { city, state, died = 1980 } = user2

// individual properties can be pulled out

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// desctructuring

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${user.firstName} ${user.lastName}`
// } 

// function fullName({ firstName, lastName }) {
//     return `${firstName} ${lastName}`
// }

// array of object literals

const movies = [
    {
        title: 'Harry Potter',
        score: 89,
        year: 1989
    },
    {
        title: 'Blade Runner',
        year: 1980,
        score: 99
    },
    {
        title: 'Odlotowe Agentki',
        score: 22,
        year: 2010
    }
]

// filtering movies based on the score

// movies.filter((movie) => movie.score >= 90)

// desctructuring

// movies.filter(({ score }) => score >= 90)

// desctructuring parameters
// when they are passed into a function
// mapowanie filmow po tym jak sa oceniane
movies.map(movie => {
    return `${movie.title} is rated ${movie.score}`
})

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})