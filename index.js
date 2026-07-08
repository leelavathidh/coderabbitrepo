const Calculator = require("./calculator");
const utils = require("./utils");

const calc = new Calculator();

console.log(calc.add(10, 20));
console.log(calc.divide(10, 0));

utils.readFile("data.txt");

const x = 100;
const y = 200;

if (x == y) {
    console.log("Equal");
}
