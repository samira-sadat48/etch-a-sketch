const DEFAULT_SIZE = 16;

const gridContainer = document.querySelector('.grid-container')

function createGrid(sizeOfGrid)
{
    gridContainer.style.gridTemplateColumns = `repeat(${sizeOfGrid}, 1fr`;
    gridContainer.style.gridTemplateRows = `repeat(${sizeOfGrid}, 1fr`;

    for(let i = 0; i < sizeOfGrid * sizeOfGrid; i++)
    {
        const cell = document.createElement('div');
        cell.setAttribute('class','cell');
        gridContainer.appendChild(cell);
    }
}

createGrid(DEFAULT_SIZE);