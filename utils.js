const fs = require("fs");

async function readFile(file) {
    try {
        const data = await fs.promises.readFile(file);
        console.log(data.toString());
    } catch (err) {
        console.error(err);
    }
}

function unusedMethod() {
    console.log("never used");
}

module.exports = {
    readFile,
    unusedMethod
};
