const colorInput = document.getElementById('color-picker')
let color = colorInput.value

const canvas = document.getElementById('canvas')
const generateButton = document.getElementById('generate-canvas')

const sliderInput = document.getElementById('myRange')
const sizeDisplay = document.getElementById('size')
let canvasSize = sliderInput.value

sliderInput.addEventListener('input',() => {
    canvasSize = sliderInput.value
    sizeDisplay.textContent = canvasSize + " x "  + canvasSize
})


generateButton.addEventListener('click', () => {
    canvas.innerHTML = ''
    generateDivs(canvasSize)
    console.log(color)
})

function generateDivs(size) {
    const cellSize = 460 / size

    for (i = 0; i < (size * size); i++) {
        const div = document.createElement('div')
        div.className = "pixel"

        div.style.width = cellSize + "px"
        div.style.height = cellSize + "px"

        div.style.border = "solid black"
        div.style.boxSizing = "border-box"
        div.style.flexGrow = "1"
        canvas.appendChild(div)
    }
}


colorInput.addEventListener('input', () => {
    color = colorInput.value
})