
// nesting timeouts 

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'red';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';

//                 setTimeout(() => { document.body.style.backgroundColor = 'purple' }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000
//     )
// }, 1000
// )


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('olive', 1000, () => {
    delayedColorChange('yellow', 1000, () => {
        delayedColorChange('green', 1000, () => {
            delayedColorChange('blue', 1000)
        })
    })
})

// searching theorethical database, executed after found 
// frequent example, success and failure 


searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it works run this 


    }, () => {
        // if it doesnt work run this 


    })
}, () => {
    // if API is down or request failed 

})