const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;


let number1 = null;
let operator = null;
let number2 = null;



const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator")

numberButtons.forEach(button => {
    button.addEventListener("click", event => {
        const number = event.target.getAttribute("data-number");
        if (screen.textContent === "...") {
            screen.textContent = number;
        }else {
        screen.textContent += number;
        }
    });
});

const operate = function(operator, number1, number2){
    if (operator === '+'){
        return add(number1, number2);
    }else if (operator === '-'){
        return substract(number1, number2)
    }else if (operator === '*'){
        returnmultiply(number1, number2);
    }else if (operator === '/'){
        if ((number1 = 0) || (number1 = null) || (number2 = 0) || (number2 = null)){
            screen.textContent = "ERROR"
        }
        return divide(number1, number2);
    };
}




function eraseText() {
    document.getElementById("screen").textContent = "...";
    number1 = null
    operator = null
    number2 = null
}









