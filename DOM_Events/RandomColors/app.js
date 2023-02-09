// Random color generator 

// random color generator 

const btn = document.querySelector('.btn')

function randomColorGenerator() {
    let c1 = Math.floor(100 + Math.random() * 100)
    let c2 = Math.floor(100 + Math.random() * 100)
    let c3 = Math.floor(100 + Math.random() * 100)
    let colors = `rgb(${c1},${c2},${c3})`
    return colors
}

function changeColor() {

    document.body.style.backgroundColor = randomColorGenerator()
}

btn.addEventListener("click", changeColor)
