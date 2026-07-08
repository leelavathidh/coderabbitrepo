const fs = require("fs");
const path = require("path");

async function readFile(file) {
    const uploadsDir = path.resolve(__dirname, "uploads");
    const resolvedPath = path.resolve(uploadsDir, file);

    if (
        resolvedPath !== uploadsDir &&
        !resolvedPath.startsWith(uploadsDir + path.sep)
    ) {
        throw new Error("Invalid file path");
    }

    const data = await fs.promises.readFile(resolvedPath);
    console.log(data.toString());
}

module.exports = {
    readFile
};