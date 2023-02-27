// THE CALLBACK VERSION
// passing to callbacks - success or failure 

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4000) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
// expects only url, not the success and failure 

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// response passed to success,err to failure
// CALLBACK HELL 

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log('it worked!')
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log('it worked again!')
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log('it worked again!')
//                         console.log(response)
//                     }, function (err) {
//                         console.log('ERROR(3nd req!)', err)
//                     })
//             },
//             function (err) {
//                 console.log('ERROR(2nd req!)', err)
//             })
//     }, function (err) {
//         console.log('it didnt work', err)

//     })


// also kind of nesting 
// .then and .catch methods 

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('it worked! (page 1)')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('promise resolved (page 2)')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('promise resolved (page 3)')
//                     })
//                     .catch(() => {
//                         console.log(('rejected (page 3)'))
//                     })
//             })

//             .catch(() => {
//                 console.log(('rejected (page 2)'))
//             })
//     }).catch(() => {
//         console.log(('rejected (page 1)'))
//     }) 

// no need for nesting - if any of the requests is rejected it falls to catch 
// data - coming from the function 
// promise chain - dependent asynchronous actions 

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('it worked! (page1)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log('it worked! (page 2)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('it worked! (page 3)')
        console.log(data)
    })
    .catch(() => {
        console.log('oh no!')
    })