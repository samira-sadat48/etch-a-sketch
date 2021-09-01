const DEFAULT_SIZE = 16;

const gridContainer = document.querySelector('.grid-container');
const clearButton = document.querySelector('.clear-btn');

clearButton.addEventListener('click',clearGrid, false);

function hoverCell(e)
{
    e.target.style.backgroundColor = "#2D46B9";
}

function createGrid(sizeOfGrid)
{
    gridContainer.style.gridTemplateColumns = `repeat(${sizeOfGrid}, 1fr`;
    gridContainer.style.gridTemplateRows = `repeat(${sizeOfGrid}, 1fr`;

    for(let i = 0; i < sizeOfGrid * sizeOfGrid; i++)
    {
        const cell = document.createElement('div');
        cell.setAttribute('class','cell');
        cell.addEventListener("mouseover", hoverCell, false);
        gridContainer.appendChild(cell);
    }
}

function clearGrid(e)
{
    const allCells = document.querySelectorAll(".cell");

    allCells.forEach(function(cell) 
    {
        cell.remove();
    });
    
    //pop-up
    const size = window.prompt("What size do you want your grid?", "16");
    //resize grid
    createGrid(size);
}

createGrid(DEFAULT_SIZE);