const fs=require('fs').promises;
const promise=fs.writeFile("data.txt","Hello, writing data through FS promises");
// console.log(promise);
promise.then(()=>{
    console.log("Data written successfully");
}).catch(err=>{
    console.log("Error occurred while writing data"+err);
}).finally(msg=>{console.log("Finally done")})


const readPromise = fs.readFile("data.txt", { encoding: 'utf-8' });

readPromise
    .then(data => {
        console.log("File content: " + data);
    })
    .catch(err => {
        console.log("Error occurred while reading data: " + err);
    })
    .finally(() => {
        console.log("Finally done with reading");
    });