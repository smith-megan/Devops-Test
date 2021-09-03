const perf = require('execution-time')();

function sumZero(arr){
  let sums = []
  let obj = {}

  for(let i=0; i<arr.length; i++){
    let minusZero=0-arr[i]
    //check if in obj
    if(obj[minusZero]){
      return true
    } else {
      sums.push([arr[i], minusZero])
    }
    obj[arr[i]]=arr[i]
  }
  return false
}

console.log(sumZero([]))
// -> False

console.log(sumZero([1]))
// -> False

console.log(sumZero([1, 2, 3]))
// -> False

console.log(sumZero([1, 2, 3, -2]))
// -> True

console.log(sumZero([1, 2, 3, -1]))
// -> True

//time complexity O(n)
//106 μs estimated time for array of 5 nums

//get the time
perf.start();        
sumZero([-3,10,4,3,2])
let resultsAppend = perf.stop();
console.log('estimated time', resultsAppend)