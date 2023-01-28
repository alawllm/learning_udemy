// selector get elements by Tag Name
// whats printed looks like an Array, but is not an Array
// map is impossible, length exists, indexOf exists as well

const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     console.log()
// }

for (let img of allImages) {
    img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80 '
}

document.getElementsByTagName('div')
document.getElementsByTagName('p')

// get Elements by Class Name

document.getElementsByClassName('square')

// manipulating the collection - changing the image source, selecting class

const squareImages = document.getElementsByClassName('square'){
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}
