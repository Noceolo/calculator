const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;


var number1 = null;
var operator = null;
var number2 = null;



const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator")

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

// operatorButtons.forEach(button => {
//     button.addEventListener("click", event => {
//         if (screen.textContent != "...") {
//             number1 = screen.textContent;
//             if (operator != null) {
//             number2 = screen.textContent;
//             }else {
//             operator = event.target.getAttribute("data-operator")
//             }
//         }
//         screen.textContent = " ";
        

//     });
// });

operatorButtons.forEach(button => {
    button.addEventListener("click", event => {
        if (operator === null){
            operator = event.target.getAttribute("data-operator")
            number1 = screen.textContent;
            screen.textContent = " ";
        }else {
            number2 = screen.textContent
        }
    });
});    

const operate = function(){
    number2 = screen.textContent
    if (operator === '+'){
        screen.textContent = +number1 + +number2;

    }else if (operator === '-'){
        screen.textContent = +number1 - +number2;

    }else if (operator === '*'){
        screen.textContent = +number1 * +number2;

    }else if (operator === '/'){
        if ((number1 = 0) || (number1 = null) || (number2 = 0) || (number2 = null)){
            screen.textContent = "ERROR"
        }
        result = +number1 / +number2;
        parseFloat(result);
        screen.textContent = result;
    };
}




function eraseText() {
    document.getElementById("screen").textContent = "...";
    number1 = null
    operator = null
    number2 = null
    result = null
}









