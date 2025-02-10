const fs=require('fs');
console.log("Before Writing")
fs.writeFileSync("data.txt","Data s written by nodejs");
console.log("Data Written Successfully");


console.log("Before Reading")
const rd=fs.readFileSync("data.txt",{encoding:'utf-8'});
console.log(rd.toString());
console.log("After Reading")

console.log("Before Append")

fs.appendFileSync("data.txt","Apended data y fs module")
console.log("After Append")

fs.unlinkSync("data.txt");
console.log("file deleted");