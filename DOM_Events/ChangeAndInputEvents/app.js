const input = document.querySelector('input')
const h1 = document.querySelector('h1')
// change event - function executed when sth changes 
// fired only when the input blurred 

// input.addEventListener('change', function (e) {
//     console.log('fevrr')
// })

// fired right away, the input does not need to be blurred 

input.addEventListener('input', function (e) {
    h1.innerText = input.value

})