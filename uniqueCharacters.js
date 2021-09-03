const perf = require('execution-time')();

function uniqueCharacters(string){
  let obj={}
  let original=true
    if(string===""|| string===undefined || string=== null){
      return "bad string input"
    }
  for(let i=0; i<string.length; i++){
    if(!obj[string[i]]){
      obj[string[i]]=1
    } else{
      return original=false
    }
  }
  return original

}

console.log(uniqueCharacters("Monday"))
// -> True

console.log(uniqueCharacters("Moonday"))
// -> False
//time complexity O(n)
//time estimated 67.6 μs for 6 letter string


//further tests
console.log(uniqueCharacters("Moondaay"))
// -> False

console.log(uniqueCharacters("My"))
// -> True

console.log(uniqueCharacters(""))
// -> bad input


//get the time
// perf.start();        
// uniqueCharacters("Monday")
// let resultsAppend = perf.stop();
// console.log('estimated time', resultsAppend)