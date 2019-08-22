const letterPositions=function(sentence){
  const results = {};
for(let i=0;i<sentence.length;i++){
  sentence=sentence.toLowerCase()
  if(results[sentence[i]]===undefined){
    results[sentence[i]]=[i]
  }
  else{
    results[sentence[i]].push(i)
  }
}
  return results;
}
const assertEqual=function(actual,expected){
  if (actual===expected){
      console.log(`😀Assertion Passed: ${actual} === ${expected}`)
  }
  else{
      console.log(`😂Assertion Failed: ${actual} !== ${expected}`)
  }
  };
  const eqArrays=function(array1, array2){
    if (!array1||!array2){
      return false
    }
    if(array1.length!==array2.length){
      return false
    }
    for(let i = 0; i < array1.length; i++){
      if(array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
const test='lighthouse in the house'
console.log(letterPositions(test))
   assertEqual(eqArrays(letterPositions('hello').h, [0]), true)
   assertEqual(eqArrays(letterPositions('hello').e, [1]), true)


