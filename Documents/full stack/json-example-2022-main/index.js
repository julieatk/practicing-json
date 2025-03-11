import data from './rawBooks.json' with { type: 'json' };
console.log(data[500]["read?"]);

console.log(data.length);
var allbooks = data.length;

const readbooks = data.filter(checkIfRead);


function checkIfRead(read) {
    console.log(data[500]["read?"])
    return read? == "Yes";
  }

  console.log(read.length); 


// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));w