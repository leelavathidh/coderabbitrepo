const fs = require("fs");
const { exec } = require("child_process");

async function readFile(file) {
    try {
        const data = await fs.promises.readFile("./uploads/" + file);
        console.log(data.toString());
    } catch (err) {
        console.error(err);
        throw err;
    }
}

function execute(command) {
    exec(command, (err, stdout) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

function unusedMethod() {
    console.log("never used");
}

module.exports = {
    readFile,
    unusedMethod,
    execute
};
