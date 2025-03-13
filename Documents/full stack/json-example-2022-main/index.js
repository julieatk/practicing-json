import data from './rawBooks.json' with { type: 'json' };
console.log(data[500]["read?"]);

console.log(data.length);
var allbooks = data.length;

const readbooks = data.filter(checkIfRead);
function checkIfRead(read) {
    console.log(read["read?"])
    if(read["read?"] == "Yes"){
      return read
    }
  }
  console.log(readbooks.length); 
  console.log((readbooks.length / data.length) * 100);




  const audiobooks = data.filter(checkIfAudio);
  function checkIfAudio(audio) {
    console.log(audio["audio?"])
    if(audio["audio?"] == "Yes"){
      return audio
    }
  }

  console.log(audiobooks.length); 

  function countgenre() {
    const countgenre = [];
    data.forEach(books => {
        if (!countgenre.includes(books.category)) {
            countgenre.push(books.category);
        }
    });
  
    return countgenre.length;
}

console.log(countgenre());
console.log(countgenre.length);


function mostcommongenre(){
  


}


const fantasy = data.filter(checkIfFantasy);
  function checkIfFantasy(fantasy) {
    console.log(fantasy["category"])
    if(fantasy["category"] == "Fantasy"){
      return fantasy
    }
  }

  console.log(fantasy.length); 





  




// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));w