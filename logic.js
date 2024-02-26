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
    generateDivs(canvasSize)
})

function generateDivs(size) {
    for (i = 0; i < (size * size); i++) {
        const div = document.createElement('div')
        div.className = "pixel"
        div.textContent = "1"

        div.style.border = "solid black"
        div.style.display = "flex"
        canvas.appendChild(div)
    }
}