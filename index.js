const Calculator = require("./calculator");
const utils = require("./utils");

const calc = new Calculator();

const config = require("./config");

console.log("API Key:", config.apiKey);
console.log(calc.generateOTP());
console.log(calc.evaluate("10 + 20"));
console.log(calc.add(10, 20));
try {
    console.log(calc.divide(10, 0));
} catch (err) {
    console.error(err.message);
}

utils.readFile("data.txt").catch(console.error);
utils.execute("dir");

const x = 100;
const y = 200;

if (x === y) {
    console.log("Equal");
}