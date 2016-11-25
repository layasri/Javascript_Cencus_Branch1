var fs=require('fs');
var data=fs.readFileSync('includes/inputData/final.csv','utf8');
// console.log(data);
var line =data.split('\n');
// console.log(line);
var headerLine = line[0].split(',');
var ageIndex= line.indexOf('Age-group');
console.log(ageIndex);
// var n= line.length;
// console.log(n);
for (var i = 0; i < line.length; i++) {
  var arr=line[i].split(',');
  // console.log(arr);
}
