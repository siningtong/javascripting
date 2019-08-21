const assertEqual=function(actual,expected){
  if (actual===expected){
      console.log(`😀Assertion Passed: ${actual} === ${expected}`)
  }
  else{
      console.log(`😂Assertion Failed: ${actual} !== ${expected}`)
  }
  } 
  const countLetters=function(sentence){
    let noSpaces=sentence.split(' ').join('')
    let result={};
    for(let letter of noSpaces){
      letter=letter.toLowerCase()
      if(result[letter] === undefined){
        result[letter]=1
      }
      else{
        result[letter]+=1
      }
    }
    return result
  }
  