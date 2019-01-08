var fs = require('fs');
var str = fs.readFileSync(process.argv[2]);
var str1 = str.toString();
var str2 = str1.split('\n');
console.log(str2.length-1);