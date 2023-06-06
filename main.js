'use strict'
const drawpad = document.getElementById('drawpad');
const btn = document.getElementById('reset');
let createdDivs;

createGrid(10);

function createGrid(columnAmount) {
    //deleteGrid();
    let width = (1000 / columnAmount);
    let height = width;
    //drawpad.style.gridTemplateColumns = "repeat(" + columnAmount + ", 1fr)";
    for (let i = 0; i < columnAmount * columnAmount; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'red';
        div.style.width = width;
        div.style.height = height;
        //div.style.cssText = "width: " + width + "height:" + height + "border:1px solid black; background-color: white;";
        drawpad.appendChild(div);
    }
}

btn.addEventListener('click', () => {
    let newGrid = "";
    deleteGrid();
    newGrid = parseInt(prompt("How many columns do you want?"));
    if (newGrid > 100) {
        alert("Choose a smaller number!");
        newGrid = parseInt(prompt("How many columns do you want?"));
    }
    createGrid();
    drawingColor();
})

function deleteGrid() {
    if (typeof createdDivs === 'undefined') {
        return;
    }
    for (let i = 0; i < createdDivs.length; i++) {
        drawpad.removeChild(createdDivs[i]);
    }
    createdDivs = undefined;
}

function randomColor() {
    let colorRandom = Math.floor(Math.random() * 255);
    return colorRandom;
}

function drawingColor() {
    let red = 0;
    let green = 0;
    let blue = 0;

}


