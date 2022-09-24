const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');
const buttons = document.querySelectorAll('#grid-btn')

let color = 'black'

//grid buttons value select
buttons.forEach(button => {
    button.addEventListener('click', () => {
        gridGenerator(button.value)  
        console.log(button.value)    
    })
});


clearBtn.addEventListener('click', clearFunc)

//generating grid according to "button.value"
function gridGenerator(gridValue) {
    container.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`
    clearFunc()
    for(let i=0; i < gridValue * gridValue; i++) {
        const gridEle = document.createElement('div')
        gridEle.classList.add('grid-element')
        gridEle.style.backgroundColor = 'white'
        gridEle.addEventListener('mouseover', changeColor)
        container.appendChild(gridEle)
    }
}

// choices from inline onclicks => changing the current value
function currColor (choice) {
    color = choice
}

///changing pen color according to current color 
function changeColor() {
    if (color === 'random'){
        this.style.backgroundColor = randcolorGenerator()
    }else{
        this.style.backgroundColor = color
    }
}

// rainbow effect generator
function randcolorGenerator() {
    const r = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)  
    return `rgb(${r}, ${g}, ${b})`
}

//clear container div
function clearFunc() {container.innerHTML = ''}
