const fs = require('fs');

function myWriteFile() {
    try {
        console.log("Before Writing");
        fs.writeFileSync("data.txt", "Data is written by Node.js");
        console.log("Data Written Successfully");
    } catch (err) {
        console.log("Error in writing the data: " + err);
    }
}

function myReadFile() {
    try {
        console.log("Before Reading");
        const rd = fs.readFileSync("data.txt", { encoding: 'utf-8' });
        console.log(rd);
        console.log("After Reading");
    } catch (err) {
        console.log("Error in reading the data: " + err);
    }
}

function myAppendFile() {
    try {
        console.log("Before Append");
        fs.appendFileSync("data.txt", " Appended data by fs module");
        console.log("After Append");
    } catch (err) {
        console.log("Error in appending the data: " + err);
    }
}

function myDeleteFile() {
    try {
        if (fs.existsSync("data.txt")) {  // Check if file exists before deleting
            fs.unlinkSync("data.txt");
            console.log("File deleted successfully");
        } else {
            console.log("File does not exist");
        }
    } catch (err) {
        console.log("Error in deleting the file: " + err);
    }
}

// Export functions
module.exports = { myWriteFile, myReadFile, myAppendFile, myDeleteFile };
