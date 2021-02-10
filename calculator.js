const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")
const equals = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const factorialButton = document.querySelector("#factorial");
const oppositeButton = document.querySelector("#opposite");
const dotButton = document.querySelector("#dot");
let displayNumber = display.textContent;
let firstOperand = "";
let clearScreen = false;
let operation;

numbers.forEach(e => {
    e.addEventListener("click", e => enterNumber(e.target));
});

window.addEventListener("keydown", e => {
    const input = document.querySelector(`[value="${e.key}"]`);
    if(input.className == "number"){
        enterNumber(input);
    }else if(input.className == "delete"){
        backspace();
    }else if(input.className == "dot"){
        addDot();
    }
});

operators.forEach(e => {
    e.addEventListener("click", function(){
        if(firstOperand != ""){
            display.textContent = operate(operation, firstOperand, parseFloat(display.textContent));
        }
        operation = e.textContent
        firstOperand = parseFloat(display.textContent);
        clearScreen = true;
    });
});

dotButton.addEventListener("click", addDot);

factorialButton.addEventListener("click", function(){
    display.textContent = factorial(parseInt(display.textContent));
});

equals.addEventListener("click", function(){
    display.textContent = operate(operation, firstOperand, parseInt(display.textContent));
    firstOperand = "";
});

clearButton.addEventListener("click", function(){
    display.textContent = 0;
    displayNumber = 0;
    firstOperand = "";
});

oppositeButton.addEventListener("click", function(){
    display.textContent = (-1) * parseFloat(display.textContent);
});

deleteButton.addEventListener("click", backspace);

function addDot(){
    if(!display.textContent.includes(".")){
        display.textContent = display.textContent + ".";
    }
}

function backspace(){
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    if(display.textContent == ""){
        display.textContent = 0;
    }
}

function enterNumber(e){
    if(clearScreen == true){
        display.textContent = 0;
        clearScreen = false;
    }
    if(display.textContent == 0){
        display.textContent = e.getAttribute("value");
    }else{
        display.textContent = display.textContent + e.getAttribute("value");
    }
    displayNumber = parseInt(display.textContent);
}

function operate(string, a, b){
    switch(string){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '×':
            return multiply(a,b);
        case '÷':
            if(b == 0){
                return "you can't do that";
            }
            return divide(a,b);
        default:
            return "What???";
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function factorial(a){
    let result = 1;
    for(let i = 1; i <= a; i++){
        result *= i;
    }
    return result;
}