const fs = require('fs'); 
const csv = require('fast-csv');

var data = fs.readFileSync('testFile.csv')
    .toString() 
    .split('\n')
    .map(e => e.trim()) 
    .map(e => e.split(',').map(e => e.trim())); 


data.splice(0,1)
data.pop()

//section for Cycle 
var col2 = data.map(function(value,index) {
     return value[1]; 
    });
// console.log("List of Machine Cycles: " + col2);

var min = Math.min.apply(Math, col2)
console.log("The minimum Cycle from list : " + min)
//End Section



//Section for Cache Memory
var col3 = data.map(function(value,index) {
    return value[2]; 
   });

let topValues = col3.sort((a,b) => b-a).slice(0,5);
console.log("Top 5 highest record : "+topValues)
//End of Section



//Section of performance differences
var published = data.map(function(value,index) {
    return value[3]; 
   });

var estimated = data.map(function(value, index){
    return value[4];
});

var diff = published.map(function(item, index) {
    return item - estimated[index];
  })
//   console.log(diff);
  let top10Rec = diff.sort((a,b) => b-a).slice(11,20);
  console.log("The next top 10 records : " + top10Rec)
//End of section
