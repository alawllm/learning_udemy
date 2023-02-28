// simply declaring a function as async returns a promise

// async function hello() {
// }

// if the function returns a value 
// the promise will be resolved with that value 
// return if successful 

const sing = async () => {

    // throw 'oh nooo'
    return 'lalalala'
}

sing().then((data) => {
    console.log('promise resolved with:', data)
})
    .catch((err) => {
        console.log('oh no, promise rejected!', err)
    })


const login = async (username, password) => {
    if (!username || !password) throw 'Missing credentials'
    if (password === 'corgifeetarecute') return 'WELCOME'
    throw 'invalid password'
}

login('fvdssd', 'corgifeetarecute')
    .then(msg => {
        console.log('logged in')
        console.log(msg)
    })
    .catch(err => {
        console.log('error')
        console.log(err)
    })