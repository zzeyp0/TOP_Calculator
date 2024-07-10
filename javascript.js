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

const display = document.querySelector("#display");
function populateDisplay(input) {
    displayVal = input;
    display.textContent = "";
    display.textContent = input;
}

let heldVals = ""
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator == null && button.classList.contains("numbers")) {
            heldVals += button.id;
        }
        if (button.classList.contains("operators")) {
            operator = button.id;
            firstNum = parseInt(heldVals);
            heldVals = "";
        }
        if (operator != null && button.classList.contains("numbers")) {
            heldVals += button.id;
        }

        if (button.classList.contains("equals")) {
            secondNum = parseInt(heldVals);
            if (operator == "+") {
                populateDisplay(add(firstNum, secondNum));
            }
            if (operator == "-") {
                populateDisplay(subtract(firstNum, secondNum));
            }
            if (operator == "*") {
                populateDisplay(multiply(firstNum, secondNum));
            }
            if (operator == "/") {
                populateDisplay(divide(firstNum, secondNum));
            }

            firstNum = null;
            secondNum = null;
            operator = null;
        }

        
        // if (button.classList.contains("numbers")) { //HOW CONCATONATE DIGITS >1?
        //     populateDisplay(button.id);
        // }

        if (button.classList.contains("clear")) {
            display.textContent = "";
            firstNum = null;
            secondNum = null;
            operator = null;
        }

        //alert(button.id);
    });
});