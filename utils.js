const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");

async function readFile(file) {

    const uploadsDir = path.resolve(__dirname, "uploads");
    const resolvedPath = path.resolve(uploadsDir, file);

    if (!resolvedPath.startsWith(uploadsDir)) {
        throw new Error("Invalid file path");
    }

    const data = await fs.promises.readFile(resolvedPath);

    console.log(data.toString());
}

function execute() {
    execFile("ls", ["-l"], (err, stdout) => {

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
