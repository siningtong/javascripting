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
const middle=function(arr){
  let middleArray = [];
  let newArr = arr.sort(function(a, b) {
    return a - b;
  });
if(newArr.length < 3){
  return []
} else if(newArr.length % 2 !== 0){
  middleArray.push(newArr[(newArr.length - 1) / 2]);
} else {
  middleArray.push(newArr[(newArr.length / 2) - 1],newArr[newArr.length / 2])
}
return middleArray
}
console.log(middle([2,3]))

