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
