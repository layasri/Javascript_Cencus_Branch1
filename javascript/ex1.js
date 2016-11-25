// var fs = require('fs');
// var data = fs.readFileSync('includes/inputData/final.csv', 'utf8');
// // console.log(data);
//
// var comma = data.split(',');
// // var headers = data[];
// console.log(data);


///////////////////////////////////////////

var fs=require('fs');
const readline=require('readline');

var lineNum1=1;
var ageIndex;
var stateIndex;
var ageGrp;
var fData=[];
const rl = readline.createInterface({
    input: fs.createReadStream('includes/inputData/final.csv')
    });

rl.on("line", function(line){
    //console.log(line);


    var data=line.split('\n');

    for(var i=0 ; i<data.length; i++){
    console.log(i);
    });
//     if(lineNum1 == 1)
//     {    //console.log(line);
//          header = line.split(',');
//          ageIndex = header.indexOf("Age-group");
//          stateIndex = header.indexOf("Area Name");
//          console.log(header[3]);
//           litrateIndex = header.indexOf("Literate - Persons");
//         lineNum1++;
//         console.log(ageIndex);
//
//     }
//
//     else if(lineNum1 != 1){
//         fData = line.split(',');
//          if(fData[stateIndex]=='State - TAMIL NADU'){
//              ageGrp=fData[ageIndex];
//
//          }
//          //console.log(ageGrp);
//         // console.log(fData);
//           litrateIndex = header.indexOf("Literate - Persons");
//         lineNum1++;
//     }
//     //console.log(fData);
// });
// console.log(fData);
// //ageliteracy(data);
//
// //function ageliteracy(data){
