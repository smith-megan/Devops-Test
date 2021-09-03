const perf = require('execution-time')();

function findLongestWord(arr) {
  let length=[];
    for (let i=0; i<arr.length; i++){
    length.push(arr[i].length)
    
    }
  return(Math.max(...length))

}

console.log(findLongestWord(["hello","panda","red","hi","seven","rpneumonoultramicroscopicsilicovolcanoconiosis"]))
//time complexity O(n)
//76.8 μs estimated time for array of 6 words

//get the time
// perf.start();        
// findLongestWord(["hello","panda","red","hi","seven","rpneumonoultramicroscopicsilicovolcanoconiosis"])
// let resultsAppend = perf.stop();
// console.log('estimated time', resultsAppend)