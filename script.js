const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const apply_btn = document.querySelector('.slider-apply');
const reset_grid = document.querySelector('.reset');


createGridSize(10);
setGridSize(10);

function buildGrid(size){
    reset();
    createGridSize(size);
    setGridSize(size);
}



apply_btn.addEventListener('click', getSlider);
reset_grid.addEventListener('click', () => {
    reset();
    buildGrid(slider.value);
});


function createGridSize(size){
    
    for (let index = 0; index < size * size; index++) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const div = document.createElement('div');
        div.classList.add('container-item')
        container.appendChild(div);
        div.addEventListener('mouseover', (event) => {
            event.target.style.background = '#' + randomColor;
        });
        
    }
}


function setGridSize(answer){
    container.style.gridTemplateColumns = `repeat(${answer}, 1fr)`;
}

function getSlider(){
    let value = slider.value;
    buildGrid(value);
}

function reset(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}




