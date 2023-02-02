// properties of the h1 object

// console.dir(h1)

// inner Text - text between the tags

document.querySelector('p').innerText

// manipulating the dom content

document.querySelector('p').innerText = 'lolololo'

// text content - with the markup

document.querySelector('p').textContent

const allLinks = document.querySelectorAll('a');

// change text of all links

for (let link of allLinks) {
    link.innerText = 'I AM A LINK'
}

// document.querySelector('h1').innerText = <i>regrer</i>

// adds to the existing text

// document.querySelector('h1').innerHTML += '<sup>njnjkn</sup>'

// Attributes

const firstLink = document.querySelector('a')

firstLink.href

firstLink.getAttribute('href')

// input type
const input = document.querySelector('input[type="text"]')


// changing input type through the dom
input.type = 'password'
input.type = 'color'

input.setAttribute('type', 'text')

// Changing style properties through dom

const h1 = document.querySelector('h1')

h1.style

// changing color

h1.style.color = 'green'

// for every link selected with querySelector all

for (let link of allLinks) {
    link.style.color = 'rgb(0,108,134)'
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

// getting the visible style

window.getComputedStyle(h1)

window.getComputedStyle(h1).color
window.getComputedStyle(h1).fontSize

// Setting class - manipulating

// h2.setAttribute('class', 'purple')


// h2.setAttribute('class', 'border')
// let currentClasses = h2.getAttribute('class')

// adding another one
// h2.setAttribute('class', `${currentClasses} purple`)

// better method 

// h2.classList
h1.classList.add('purple')
h1.classList.remove('purple')

// yes or no 

h1.classList.contains('border')
false

// on and off 

h1.classList.toggle('border')