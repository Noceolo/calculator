const add = function(a, b) {
    return a + b;
}

const substract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

let number1 
let operator
let number2


const operate = function(operator, number1, number2){
    if (operator === '+'){
        add(number1, number2);
    }else if (operator === '-'){
        substract(number1, number2)
    }else if (operator === '*'){
        multiply(number1, number2);
    }else if (operator === '/'){
        divide(number1, number2);
    }

}