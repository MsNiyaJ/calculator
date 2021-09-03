class Equation{
    constructor(){
        this.operand1 = '';
        this.operator = '';
        this.operand2 = '';
        this.result = '';
    }
}

const screenTxt = document.querySelector('#screen-text');    
let eq = new Equation();


//Add an event listener to each number button
const numbers = Array.from(document.querySelectorAll('.numbers'));
numbers.forEach(number => {
    number.addEventListener('click', () => {
        display(number.textContent);
    });
});

//Numbers are displayed on the screen when a button is clicked
const display = function(num){
    if(screenTxt.textContent === '0')
        screenTxt.textContent = num;    //replaces the initial 0 on the screen
    else
        screenTxt.textContent += num;   
}

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
	return num1 * num2;
};

const divide = function(num1, num2) {
	return num1 / num2;
};

const negate = function(num){
    return num * -1;
}

const percent = function(num) {
    return num / 100;
}

const squareroot = function(num) {
    return Math.sqrt(num);
}

const clear = function(){
    screenTxt.textContent = '0';
}

//Calls a function based on the chosen operator
// function operate(operator, num1, num2){
//     if(operator === 'add') 
//         return add(num1, num2);
//     else if(operator === 'subtract')
//         return subtract(num1, num2); 
//     else if(operator === 'multiply')
//         return multiply(num1, num2);
//     else if(operator === 'divide')
//         return divide(num1, num2);
// }