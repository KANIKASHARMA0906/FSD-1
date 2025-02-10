const { dataWriteCB, dataReadCB } = require('./FileOperations');

console.log("Writing data...");
dataWriteCB();

setTimeout(() => {
    console.log("Reading data...");
    dataReadCB();
}, 1000);