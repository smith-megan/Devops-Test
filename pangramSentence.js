//incomplete needs work on regex

function pangramSentence(string){
  let obj={}
  for(let i=0; i<string.length; i++){
    let letter=string[i]
    if(!obj[string[i]] && letter.match(/[a-zA-Z]+/)===true){
      obj[string[i]]=1
    }
  }
  const result = Object.keys(obj).length;
  return result
}
// For example:

console.log(pangramSentence("The quick brown fox jumps over the lazy dog!"))
// -> True

console.log(pangramSentence("I like cats, but not mice"))
// -> False