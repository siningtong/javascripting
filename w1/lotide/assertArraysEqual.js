const eqArrays=require('./eqArrays')

const assertArraysEquals = function(array1,array2){
  if(eqArrays(array1,array2) === true){
    console.log(`😀 😀 😀[${array1}] === [${array2}]`)
  }
  else{
    console.log(`😂 😂 😂[${array1}] !== [${array2}]`)
  }
}

module.exports=assertArraysEquals
//  let arr1 = [1,2];
//  let arr2 = [1,2];




 //assertArraysEquals(arr1,arr2);

