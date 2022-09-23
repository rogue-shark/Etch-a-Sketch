const type1Btn = document.querySelector('.type-1-btn');
const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');

type1Btn.addEventListener('click', gridGenerator)

clearBtn.addEventListener('click', () => {
    container.innerHTML = ''
})

function gridGenerator() {
    container.style.gridTemplateColumns = 'repeat(16, 1fr)'
    container.style.gridTemplateRows = 'repeat(16, 1fr)'

    for(let i=0; i < 16 * 16; i++) {
        const gridEle = document.createElement('div')
        gridEle.classList.add('grid-element')
        gridEle.style.backgroundColor = 'red'
        gridEle.addEventListener('mouseover', changeColor)
        container.appendChild(gridEle)
    }
}

function changeColor(e) {
    if ( e.type === 'mouseover'){
        e.target.style.backgroundColor = 'black'
    }
}


