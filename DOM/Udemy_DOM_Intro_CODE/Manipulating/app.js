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

document.querySelector('h1').innerText = <i>regrer</i>

// adds to the existing text

document.querySelector('h1').innerHTML += '<sup>njnjkn</sup>'

