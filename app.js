const type1Btn = document.querySelector('.type-1-btn');
const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');



type1Btn.addEventListener('click', () => {
    gridGenerator()
    console.log(type1Btn.value)
} )

clearBtn.addEventListener('click', clearFunc)

function gridGenerator() {
    container.style.gridTemplateColumns = 'repeat(16, 1fr)'
    container.style.gridTemplateRows = 'repeat(16, 1fr)'
    clearFunc()
    for(let i=0; i < 16 * 16; i++) {
        const gridEle = document.createElement('div')
        gridEle.classList.add('grid-element')
        gridEle.style.backgroundColor = 'red'
        gridEle.addEventListener('mouseover', changeColor)
        container.appendChild(gridEle)
    }
}

//styling targeted event
function changeColor(e) {
    if ( e.type === 'mouseover'){
        e.target.style.backgroundColor = 'black'
    }
}

function clearFunc() {container.innerHTML = ''}
