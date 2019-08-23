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


const assertArraysEquals = function(array1,array2){
  if(eqArrays(array1,array2) === true){
    console.log(`[${array1}] === [${array2}]`)
  }
  else{
    console.log(`[${array1}] !== [${array2}]`)
  }
}
const without = function(source, itemsToRemove) {
  let newArr = [];
  for(let i = 0; i < source.length;i ++) {
    if(!itemsToRemove.includes(source[i])) {
      newArr.push(source[i])
    }
  }
  return newArr
}
console.log(without(["1", "2", "3"], [1, 2, "3"]))