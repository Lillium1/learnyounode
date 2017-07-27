var fs = require("fs");
var path = fs.readFileSync(process.argv[2]);
var lineas = path.toString().split('\n');
console.log(lineas.length-1);