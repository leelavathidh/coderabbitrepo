const Calculator = require("./calculator");
const utils = require("./utils");

const calc = new Calculator();

console.log(calc.add(10, 20));
try {
    console.log(calc.divide(10, 0));
} catch (err) {
    console.error(err.message);
}

utils.readFile("data.txt").catch(console.error);

const x = 100;
const y = 200;

if (x === y) {
    console.log("Equal");
}
