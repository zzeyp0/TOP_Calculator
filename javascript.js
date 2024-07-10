let firstNum = null;
let secondNum = null;
let displayVal = 0;


function operate(operator, firstNum, secondNum) {
    if (String(operator) == "+") {
        return firstNum + secondNum;
    }
    if (String(operator) == "-") {
        return firstNum - secondNum;
    }
    if (String(operator) == "*") {
        return firstNum * secondNum;
    }
    if (String(operator) == "/") {
        if (secondNum == 0) {
            return "div0 error";
            alert ("zero");
        }
        else {
            return firstNum / secondNum;
        }
    }
}


function populateDisplay() {
    const display = document.querySelector("#display");
    display.textContent = displayVal;
}
populateDisplay();


let heldNums = []; //array to store each digit as inputted, full operands separated by " "
let heldOperators = []; //array to store each operator inputted in order
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (displayVal == "div0 error") { //reset after divide by 0 error
            inputClear();
        }

        if (button.classList.contains("numbers")) {
            heldNums.push(button.id);
            inputNum(button.id);
            populateDisplay()
        }
        if (button.classList.contains("operators")) {
            displayVal = "";
            heldNums.push(" "); //by pushing a space w/ each operator,
                                //operand numbers in heldNums[] are separated by a space
            heldOperators.push(button.id);
        }

        if (button.classList.contains("equals")) {
            inputEquals();
            populateDisplay();
        }
        if (button.classList.contains("clear")) {
            inputClear();
            populateDisplay();
        }
    });
});


function inputNum(num) {
    if (heldOperators.length == 0) { //first number operator == null
        //first ever input
        if (displayVal == 0 || displayVal == null) {
            displayVal = num;
        }
        else if (displayVal == firstNum) { //after equals is hit and firstNum is a result
            displayVal += num;
        }
        else {
            displayVal += num;
        }
    }
    else { //second number
        if (displayVal == firstNum) {
            displayVal = num;
        }
        else {
            displayVal += num;
        }
    }
}

function inputEquals() {
    let result = 0;
    //convert all individual button inputs heldNums[] into proper operand numbers
    let operandNums = heldNums.join("").split(" ").map(item => parseInt(item));

    if (operandNums.length < 1) {
        result = 0;
    }
    if (operandNums.length == 1) {
        result = operandNums.shift();
    }
    if (operandNums.length > 1) {
        firstNum = operandNums.shift();
        while (operandNums.length > 0) {
            secondNum = operandNums.shift();
            firstNum = operate(heldOperators.shift(), firstNum, secondNum);
        }
        result = firstNum;
    }

    //rounds to 5 decimal places in case of many digits
    if (result != "div0 error" && countDecimals(result) > 8) {
        result = result.toFixed(5) 
    }
    
    displayVal = result;

    firstNum = result; //allows for building upon result
    heldNums = [];
    heldNums.push(result);
    heldOperators = [];
}

function inputClear() {
    firstNum = null;
    secondNum = null;
    displayVal = 0;

    heldNums = [];
    heldOperators = [];
}

function countDecimals(value) {
    if (Math.floor(value) !== value) {
        return (value.toString().split(".")[1].length || 0);
    }
    return 0;
}