let btn = document.querySelector('#v2')

// can be set to a function
// onclick - small letters

btn.onclick = function () {
    console.log("You clicked me!")
    console.log("i hope it worked")
}

// function is not executed; passed as a property 
// executed firstly on click 

function scream() {
    console.log("AAAAAAAAAA")
}

btn.onmouseenter = scream;

// it HAS to be wrapped in some sort of function
// in order not to execute it right away 
// the onclick property has to be set TO a function 
// the value has to be a function 

document.querySelector('h1').onclick = () => alert('you clicked the h1!') 
