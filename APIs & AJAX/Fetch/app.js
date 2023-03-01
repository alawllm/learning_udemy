// most basic use of fetch
// returns a promise 
// promise resolved as soon as fetch
// receives any headers 

// res.jason has to be returned 
//otherwise body is just unreadable stream
// in order for data to be printed
// otherwise undefined 

// the first one has to be resolved in order to the first one to start 

// fetch('https://swapi.dev/api/people/1')
//     .then(res => {
//         console.log('resolved!', res);
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         return fetch('https://swapi.dev/api/people/2')
//     })
//     .then(res => {
//         console.log('2nd req resolved!')
//         return res.json()
//     })
//     .catch(e => {
//         console.log('error!', e)
//     })

// async function cleaner syntax version
// wrap in try catch to handle errors 

// const loadStarWarsPeople = async () => {
//     try {
//         const res = await fetch('https://swapi.dev/api/people/1');
//         const data = await res.json();
//         console.log(data)
//         const res2 = await fetch('https://swapi.dev/api/people/3');
//         const data2 = await res2.json();
//         console.log(data2)
//     }
//     catch (e) {
//         console.log('ERROR!', e)
//     }


// }

// loadStarWarsPeople()

// AXIOS 
// returns a promise 
// returns fully readable json data 

// axios.get('https://swapi.dev/api/people/1')
//     .then(res => {
//         console.log('response!', res)
//     })
//     .catch(e => {
//         console.log('error', e)
//     })

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data)
    }
    catch (e) {
        console.log('error', e)
    }

}

getStarWarsPerson(5)
getStarWarsPerson(10)