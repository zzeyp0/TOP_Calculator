let firstNum = null;
let secondNum = null;
let operator = null;
let displayVal = null;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, firstNum, secondNum) {
    if (operator = "+") {
        return add(firstNum, secondNum);
    }
    if (operator = "-") {
        return subtract(firstNum, secondNum);
    }
    if (operator = "*") {
        return multiply(firstNum, secondNum);
    }
    if (operator = "/") {
        return divide(firstNum, secondNum);
    }
}

function populateDisplay(input) {
    displayVal = input;
    const display = document.querySelector("#display");
    display.textContent = "";
    display.textContent = input;
}

