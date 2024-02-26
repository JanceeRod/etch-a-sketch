const colorInput = document.getElementById('color-picker')
let color = colorInput.value

const penButton = document.getElementById('pen')
const rainbowButton = document.getElementById('rainbow')
const eraserButton = document.getElementById('eraser')
const clearButton = document.getElementById('clear')
let colorMode = "pen"
let isDrawing = "false"

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
    isDrawing = "false"
})

function generateDivs(size) {
    const cellSize = 460 / size

    for (i = 0; i < (size * size); i++) {
        const div = document.createElement('div')
        div.className = "pixel"

        div.style.width = cellSize + "px"
        div.style.height = cellSize + "px"

        div.style.boxSizing = "border-box"
        div.style.flexGrow = "1"

        div.addEventListener('mousedown', () => {
            if (colorMode === "pen") {
                isDrawing = "true"
                div.style.backgroundColor = color
            }
        })

        div.addEventListener('mousemove', () => {
            if (colorMode === "pen") {
                if (isDrawing == "true") {
                    div.style.backgroundColor = color
                }
            }
        })

        div.addEventListener('mouseup', () => {
            isDrawing = "false"
        })

        canvas.appendChild(div)
    }
}


colorInput.addEventListener('input', () => {
    color = colorInput.value
    colorMode = "pen"
})

penButton.addEventListener('click', () => {
    colorMode = "pen"
})

rainbowButton.addEventListener('click', () => {
    colorMode = "rainbow"
})