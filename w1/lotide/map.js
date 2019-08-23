const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}




const eqArrays=function(array1, array2){
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]) {
      return false;
    } 
  }
  return true;
}


const assertArraysEquals = function(array1,array2){
  if(eqArrays(array1,array2) === true){
    console.log(`[${array1}] === [${array2}]`)
  }
  else{
    console.log(`[${array1}] !== [${array2}]`)
  }
}
let x=['g','c','t','m','t']
let y=map(words,word => word[0])
assertArraysEquals(x,y)