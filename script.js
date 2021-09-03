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

const percent = function(num) {
    return num / 100;
}

const squareroot = function(num) {
    return Math.sqrt(num);
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
// }s