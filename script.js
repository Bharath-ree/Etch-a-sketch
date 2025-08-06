const container = document.querySelector('#container');

const gridSize = 16; // Default grid size
const totalSquares = gridSize * gridSize;

for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}
const divs = document.querySelectorAll('.square');
divs.forEach(function(square) {
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'black';
    });
});

//reset button and grid size
function createGrid(size) {
    container.innerHTML = ''; 
    const totalSquares = size * size;
    const squareSize = 640/size; 

    for( let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'black';
        });
    }
    container.appendChild(square);
}

//add event listener to reset button
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', function() {
    let newSize = prompt('Enter new grid size (1-100):');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    createGrid(newSize);
});