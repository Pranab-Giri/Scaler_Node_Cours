const path = require("path");

let ext = path.extname("D:\\DELTA\\NODEJS_PRACTICE\\Node_Module_System\\f1.txt");
console.log(ext);
let basename = path.basename('D:\\DELTA\\NODEJS_PRACTICE\\Node_Module_System\\f1.txt');
console.log(basename);

console.log(__filename);
console.log(__dirname);