//unfinished see other problems for test results

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
    obj[minusZero]=arr[i]
  }
  
}
}

console.log(sumZero([]))
// -> False

console.log(sumZero([1]))
// -> False

console.log(sumZero([1, 2, 3]))
// -> False

console.log(sumZero([1, 2, 3, -2]))
// -> True