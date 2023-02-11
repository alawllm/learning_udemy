const form = document.querySelector('#shelterForm');

const input = document.querySelector('#catName')
const list = document.querySelector('#cats')
// listening for: submit 
// preventDefault - prevents default behaviour of the event 

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement('LI')
    newLI.innerText = catName;
    list.append(newLI)
    input.value = ''
})

// value of the input 
// input.value  