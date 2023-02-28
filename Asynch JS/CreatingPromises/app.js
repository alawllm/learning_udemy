const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('REQUEST ERROR');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('done')
        console.log(data)
    })
    .catch((err) => {
        console.log('oh no!', err)
    })

// reject not needed, only resolve needed - after the color changed 

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('purple', 1000))


async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('yellow', 1000)
    return 'all done!'
}

// rainbow().then(() => console.log('end of rainbow'))

async function printRainbow() {
    await rainbow();
    console.log('end of rainbow!')
}

// awaiting a request, whatever comes back is being 
// stored in a variable 

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1')
        let data2 = await fakeRequest('/page2')
        console.log(data1)
    }
    catch (e) {
        console.log('it failed')
        console.log('error is:', e)
    }

}
