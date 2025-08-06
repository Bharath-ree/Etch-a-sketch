const container = document.querySelector('#container');

createGrid(16); //initial grid size

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
            square.style.backgroundColor = 'black'
        });
    container.appendChild(square);    
    }
}

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