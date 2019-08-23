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


const flatten=function(arr){
  let newArr=[];
  for(let i=0; i<arr.length;i++){
    if(!Array.isArray(arr[i])){
      newArr.push(arr[i])
    }
    else{
      for(let j = 0; j<arr[i].length;j++){
        newArr.push(arr[i][j])
      }
    }
  }
  return newArr
}
console.log(flatten([1, 2, [3, 4], 5, [6]]))  