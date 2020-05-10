let matrix = {}

const cityNames =
  ["Arad","Zerind","Timisoara","Sibiu","Oradea",
  "Lugoj","Mehadia","Dobreta","Craiova","Fagaras",
  "Bucharest","Rimnicu","Pitesti","Giurgiu","Urziceni",
  "Hirsova","Vaslui","Eforie","Iasi","Neamt"];

const cityValues = [
  [0,75,118,140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [75,0,0,0,71,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [118,0,0,0,0,111,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [140,0,0,0,151,0,0,0,0,99,0,80,0,0,0,0,0,0,0,0],
  [0,71,0,151,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,111,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,70,0,75,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,75,0,120,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,120,0,0,0,146,138,0,0,0,0,0,0,0],
  [0,0,0,99,0,0,0,0,0,0,211,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,211,0,0,101,90,85,0,0,0,0,0],
  [0,0,0,80,0,0,0,0,146,0,0,0,97,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,138,0,101,97,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,90,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,85,0,0,0,0,98,142,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,98,0,0,86,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,142,0,0,0,92,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,86,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,92,0,0,87],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,87,0]
];

for(let i = 0; i < cityNames.length; i++) {
  matrix[cityNames[i]] = cityValues[i];
}

console.log(matrix);

console.log("Please enter a country name: ");

process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  input = input.slice(0, -1);
  let city = matrix[input];
  city.forEach((item, i) => {
    if(item != 0) {
      console.log(cityNames[i] + ": " + item);
    }
  });
});
