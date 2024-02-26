const canvas = document.getElementById('canvas')

const sliderInput = document.getElementById('myRange')
const sizeDisplay = document.getElementById('size')
let canvasSize = sliderInput.value

sliderInput.addEventListener('input',() => {
    canvasSize = sliderInput.value
    sizeDisplay.textContent = canvasSize + " x "  + canvasSize
    generateDivs(canvasSize)
})

function generateDivs(size) {
    const div = document.createElement('div')
    div.className = "pixel"
    div.textContent = "1"

}