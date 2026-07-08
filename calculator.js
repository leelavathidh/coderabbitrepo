const crypto = require("crypto");
class Calculator {

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }

    addAgain(a, b) {
        return a + b;
    }

    evaluate(expression) {
        const regex = /^[0-9+\-*/().\s]+$/;
    
        if (!regex.test(expression)) {
            throw new Error("Invalid expression");
        }
    
        return Function(`"use strict"; return (${expression})`)();
    }

    generateOTP() {
        return crypto.randomInt(0, 1000000)
            .toString()
            .padStart(6, "0");
    }
}

module.exports = Calculator;
