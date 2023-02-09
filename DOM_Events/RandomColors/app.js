// Random color generator 

const btn = document.querySelector('.btn')

function randomColorGenerator() {
    return console.log('it works')
}

function changeColor() {

    document.body.style.backgroundColor = randomColorGenerator()
}

btn.addEventListener("click", changeColor)