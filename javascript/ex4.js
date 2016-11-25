var fs = require('fs');
var readline = require('readline');

// var rs = readline.createInterface({
//   input: fs.createReadStream('file2.txt')
// });



const writeStream =   fs.createWriteStream('includes/inputData/final.csv');
// var data  = fs.readFileSync('includes/inputData/final.csv', 'utf8');
rs.on('line', (line) => {
});

var lineReader = require('readline').createInterface({
input: require('fs').createReadStream('includes/inputData/India2011.csv')
});

lineReader.on('line', function (line) //reads line by line
{
writeStream.write(line + "\n"); //write line to the file
});

var lineReader1 = require('readline').createInterface({
input: require('fs').createReadStream('includes/inputData/IndiaSC2011.csv')
});

lineReader1.on('line', function (line) //reads line by line
{
writeStream.write(line + "\n"); //write line to the file
});

var lineReader2 = require('readline').createInterface({
input: require('fs').createReadStream('includes/inputData/IndiaST2011.csv')
});

lineReader2.on('line', function (line) //reads line by line
{
writeStream.write(line + "\n"); //write line to the file
});
// console.log(data);
