let fs = require('fs');
let cn = require('./assets/cityNodes.js');

let data = fs.readFileSync('./assets/data.txt', 'utf8');
let dataArray = data.split('\n');
dataArray.pop();

let cityArray = [];

for(let i = 0; i < dataArray.length; i++) {
  let current = dataArray[i].split(' ');
  cityArray.push(new cn.CityNode(current[0],current[1]));
}

cityArray.forEach((item) => {
  console.log(item.name + ' ' + item.value);
});

cityArray.sort(function(a,b) {
  return a.value - b.value;
});

console.log('==========');

cityArray.forEach((item) => {
  console.log(item.name + ' ' + item.value);
});
