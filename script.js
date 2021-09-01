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

//Calls a function based on the chosen operator
function operate(operator, num1, num2){
    if(operator === 'add') 
        return add(num1, num2);
    else if(operator === 'subtract')
        return subtract(num1, num2); 
    else if(operator === 'multiply')
        return multiply(num1, num2);
    else if(operator === 'divide')
        return divide(num1, num2);
}

console.log(operate('add', 6, 3));      //9
console.log(operate('subtract', 6, 3)); //3
console.log(operate('multiply', 6, 3)); //18
console.log(operate('divide', 6, 3));   //2