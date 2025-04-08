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


  //question three

 // function countgenre() {
    const countgenre = []; //holds all unique categories

    //goes through every book in data
    data.forEach(books => {
      //checks to see if a book's category is already inside countgenre
        if (!countgenre.includes(books.category)) {
            countgenre.push(books.category); //unique categories
        }
    });
  
    //return countgenre.length;
//}

//console.log(countgenre());
console.log(countgenre.length); //how many unique genres


const counts = []


for (let i = 0; i < countgenre.length; i++) {
  const filter = countgenre[i];
  console.log(countgenre[i])



  const filtergenre = data.filter((fantasy) =>{
    //console.log(fantasy["category"])
    if(fantasy["category"] == filter){
      return fantasy
    }
  })

  console.log(filtergenre.length);

  counts.push(filtergenre.length);
}
console.log(counts)

let maxgenre = 0;

for (let i = 0; i < counts.length; i++) {
  if (counts[i] > maxgenre) {
      maxgenre = counts[i];
  }
}

console.log(maxgenre);
console.log(counts.indexOf(maxgenre));
console.log(countgenre.at(counts.indexOf(maxgenre)));





const countauthors = []; //storing author names
const countingbooksperauthor = [];  //store books per author

readbooks.forEach(book => {
  if (!countauthors.includes(book.author)) {
      countauthors.push(book.author); //add author
      countingbooksperauthor.push(0); //start counting at 0
  }
});

    readbooks.forEach(book => {
      const index = countauthors.indexOf(book.author); //finding the index of of book's author in countauthors array
      countingbooksperauthor[index]++; //add 1 to author's count (corresponding position in countaing array)
  });
  
  let maxCount = 0;
  let mostReadAuthor = "";
  
  //find highest count
  for (let i = 0; i < countingbooksperauthor.length; i++) {
      if (countingbooksperauthor[i] > maxCount) {
          maxCount = countingbooksperauthor[i]; //update 
          mostReadAuthor = countauthors[i]; //save
      }
  }

  console.log(mostReadAuthor);




  const yearCounts = {}; //store the dates


  let maxYear = "";
  let maxBook = 0;
  

  for (const book of readbooks) { //go through each book in data
    // Extract the year from "Month Day, Year" format
    const datestring = book["Date Bought"]; //getting the purchase date string

    //char: returns character at specified index in a string
    //string lengths vary
    
    const year = datestring.charAt(datestring.length - 4) + 
    datestring.charAt(datestring.length - 3) +
    datestring.charAt(datestring.length - 2) + 
    datestring.charAt(datestring.length - 1);


  
    if (!yearCounts[year]) {
      yearCounts[year] = 1; //first time year is seen, start the year count at 1
    } else {
      yearCounts[year] += 1; //if the year is already counted, add 1
      //this loop helps count number of books to put into yearcounts[year]
    }
  }
  

    //comparing year count to the maxbook
  for (const year in yearCounts) {  //looping through each year in yearcounts
    if (yearCounts[year] > maxBook) { //yearcount[year] is the number of books in that year
      maxYear = year;
      maxBook = yearCounts[year]; //update when higher count is found
    }
  }
  
  console.log(maxYear);
  console.log(maxBook);


    
      




