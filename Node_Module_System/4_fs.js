const fs = require('fs');

//Reading a file
// let readFile = fs.readFileSync("f1.txt");
// console.log('This is file 1> ' + readFile);

// //Writing in a file
// //If the file name that is passed doesn't exist a new file will be created with 
// // its filename and the data will be writen on that file.

// fs.writeFileSync('f2.txt', 'This writing file 2');
// console.log("File 2 has been writen");

// //Append file 

// fs.appendFileSync('f2.txt', ' this is after appended');
// console.log("file 2 has been appended!");

// //deleting file

// fs.unlinkSync('f3.txt');
// console.log("file 3 was deleted!");


//Working with the Directories

//Create a new Dierectory

// fs.mkdirSync('myDirectory');
// console.log("New directoyr has been created");

//read files inseide a directory

let all_Files = fs.readdirSync('myDirectory');
console.log("All files inside this directory ", all_Files);

//chekc wheather a directory exist or not

let doesExist = fs.existsSync('1_cp.js');
console.log(doesExist);

//Remove the directory
//for removing the directory first we have delete all files present inside the directory after that we can delete the our directory.

fs.rmdirSync('myDirectory');