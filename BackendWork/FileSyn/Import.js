const fileOps = require('./myFileData'); // Import functions

fileOps.myWriteFile();  // Writing to file
fileOps.myReadFile();   // Reading file content
fileOps.myAppendFile(); // Appending data
fileOps.myReadFile();   // Reading after append
fileOps.myDeleteFile(); // Deleting file
