const add = (a, b) => +a + +b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b === 0 ? "error" : a / b);


let number1 = null;
let operator = null;
let number2 = null;

const operate = function(operator, number1, number2){
    number2 = parseFloat(number2);
    number1 = parseFloat(number1);
    if (operator === '+'){
        return add(number1,number2)

    }else if (operator === '-'){
        return substract(number1,number2)

    }else if (operator === '*'){
        return multiply(number1,number2)

    }else if (operator === '/'){
        
        return divide(number1,number2)
    };
}

const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator")
const resultButton = document.getElementById("result")

numberButtons.forEach(button => {
    button.addEventListener("click", event => {
        const number = event.target.getAttribute("data-number");
        if (screen.textContent === "..." || screen.textContent === "-" || screen.textContent === "+" || screen.textContent === "*" || screen.textContent === "/") {
            screen.textContent = number;
        }else {
        screen.textContent += number;
        }
    });
});


operatorButtons.forEach(button => {
    button.addEventListener("click", event => {
        if (operator === null){
            operator = event.target.getAttribute("data-operator")
            number1 = screen.textContent;
            screen.textContent = " ";
        }else {
            number2 = parseFloat(screen.textContent);
        }
    });
});    



resultButton.addEventListener("click", () => {
    if(number1 && operator) {
        number2 = screen.textContent;
        const result = operate(operator, number1, number2);
        screen.textContent = result.toFixed(2);
        number1 = null;
        number2 = null;
        operator = null;
    };
})




function eraseText() {
    document.getElementById("screen").textContent = "...";
    number1 = null
    operator = null
    number2 = null
    result = null
}









