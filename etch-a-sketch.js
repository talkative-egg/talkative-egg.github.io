const containter = document.querySelector("#container");
const clearButton = document.querySelector("#clear");
const sizeButton = document.querySelector("#changeSize");

setContainer(16);
createSquares(16);

let squares = document.querySelectorAll(".square");

sizeButton.addEventListener("click", function(){
    let squareNum = prompt("How many squares per row? (100 max)");
    if(squareNum > 100){
        squareNum = 100;
    }
    setContainer(squareNum);
    createSquares(squareNum);
    squares = document.querySelectorAll(".square");

    sketchFunction();
});

sketchFunction();

clearButton.addEventListener("click", function(){
    squares.forEach(e => {
        e.style.backgroundColor = "white";
    });
});

function numberRandomizer(){
    return Math.random() * 361;
}

function createSquares(squareNum){
    removeAllChildNodes(container);
    for(let i = 0; i < squareNum; i++){
        for(let j = 0; j < squareNum; j++){
            const square = document.createElement("div");
            square.className = "square";
            container.appendChild(square);
        }
    }
}

function setContainer(squareNum){
    let width = squareNum * 20 + (squareNum - 1) * 2;
    container.style.gridTemplateColumns = `repeat(${squareNum}, auto)`;
    container.style.gridTemplateRows = `repeat(${squareNum}, auto)`;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function sketchFunction(){
    squares.forEach(e => {
        e.addEventListener("mouseover", function(){
            let hue = numberRandomizer();
            e.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        });
    });
}