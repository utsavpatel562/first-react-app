const calculator = require('./calc'); // dot and slash is required to access filename 

let x = 50, y = 10;

console.log("Addition of 50 and 10 is "
			+ calculator.add(x, y));

console.log("Subtraction of 50 and 10 is "
			+ calculator.sub(x, y));

console.log("Multiplication of 50 and 10 is "
			+ calculator.multi(x, y));