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
        setOperands(number.textContent);
    });
});

//Numbers are displayed on the screen when a button is clicked
const display = function(num){
    if(screenTxt.textContent === '0')
        screenTxt.textContent = num;            //replaces the initial 0 on the screen
    else
        screenTxt.textContent += num;
}

//Sets all the operands in the equations
const setOperands = function(num){
    if(eq.operator === '')
        eq.operand1 = screenTxt.textContent;    //Sets the 1st operand of the equation, if an operator wasn't pressed yet
    else
        eq.operand2 = screenTxt.textContent;    //Sets the 2nd operand of the equation
}

//Add an event listener to each operator button
const operators = Array.from(document.querySelectorAll('.operators'));
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        togglePress(operator);
    });
});

//Adds a style to the pressed operator button
const togglePress = function(operator){
    operator.classList.add('pressed-btn');
    removeSiblingPress(operator);
}


//Removes style from other buttons that were pressed previously
const removeSiblingPress = function(operator){
    for(const op of operators){
        if(op !== operator){
            op.classList.remove('pressed-btn');
        }
    }
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