const fs = require("fs");

function readFile(file) {
    const data = fs.promises.readFile(file);
    console.log(data.toString());
}

function unusedMethod() {
    console.log("never used");
}

module.exports = {
    readFile,
    unusedMethod
};
