'use strict'

const drawpad = document.getElementById('drawpad');
const btn = document.getElementById('reset');
let littleDivs;


createGrid();

function createGrid(columnAmount) {
    deleteGrid();
    let width = (1000 / columnAmount);
    let height = width;
    drawpad.style.gridTemplateColumns = "repeat(" + columnAmount + ", 1fr)";
    for (let i = 0; i < columnAmount * columnAmount; i++) {
        const div = document.createElement('div');
        div.classList.add('littleDiv');
        drawpad.appendChild(div);
        div.style.width = width + 'px';
        div.style.height = height + 'px';
    }
    littleDivs = document.querySelectorAll('.littleDiv');
}

btn.addEventListener('click', () => {
    createGrid();
    let newGrid = "";
    deleteGrid();
    newGrid = parseInt(prompt("How many columns do you want?"));
    if (newGrid > 100) {
        alert("Choose a smaller number!");
        newGrid = parseInt(prompt("How many columns do you want?"));
    }
    createGrid(newGrid);
    drawingColor();
})

function deleteGrid() {
    drawpad.innerHTML = "";
}

function randomColor() {
    let colorRandom = Math.floor(Math.random() * 255);
    return colorRandom;
}

function drawingColor() {
    littleDivs = document.querySelectorAll('.littleDiv');
    let red = 0;
    let green = 0;
    let blue = 0;
    let bgColor;
    littleDivs.forEach(littleDivs => {
        littleDivs.addEventListener('mouseover', () => {
            red = randomColor();
            green = randomColor();
            blue = randomColor();
            bgColor = "rgb(" + red + "," + green + "," + blue + ")";
            littleDivs.style.backgroundColor = bgColor;
        })
    })
}


