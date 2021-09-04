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
        setOperands();
        console.log(eq);
    });
});

//Numbers are displayed on the screen when a button is clicked
const display = function(num){
    if(eq.operand1 !== '' && eq.operator !== '')        //if you click a number after choosing an operator
        screenTxt.textContent = (eq.operand2 += num);   //remove everything from the screen and fill in new numbers
    else if(screenTxt.textContent === '0')
        screenTxt.textContent = num;            //replaces the initial 0 on the screen
    else
        screenTxt.textContent += num;
}

//Sets all the operands in the equations
const setOperands = function(){
    if(eq.operator === '')
        eq.operand1 = screenTxt.textContent;    //Sets the 1st operand of the equation, if an operator wasn't pressed yet
    else
        eq.operand2 = screenTxt.textContent;    //Sets the 2nd operand of the equation
}

//Add an event listener to each operator button
const operators = Array.from(document.querySelectorAll('.operators'));
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if(!equationIsSet()){
            togglePress(operator);
            setOperator(operator.textContent);
            console.log(eq);
        }
    });
});

//Returns true when the operands and operator are nonempty
const equationIsSet = function(){
    const arr = [eq.operand1, eq.operator, eq.operand2];
    return arr.every((currentValue) => currentValue !== '');
}

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

//Set the operator of the equation
const setOperator = function(operator){
    eq.operator = operator;
}

//Add an event listener to the equal button
const equalBtn = document.querySelector('.equalBtn');
equalBtn.addEventListener('click', () => {
    removeSiblingPress(-1); //removes all pressed buttons
    operate(eq.operator, eq.operand1, eq.operand2);
});

// Calls a math function based on the chosen operator
function operate(operator, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);

    if(operator === '+') 
        eq.result = add(num1, num2);
    else if(operator === '-')
        eq.result = subtract(num1, num2); 
    else if(operator === 'x')
        eq.result = multiply(num1, num2);
    else if(operator === '÷')
        eq.result = divide(num1, num2);

    console.log(eq);
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