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

const printSomething = function (word){
  console.log(word);
}


// let arr1 = [1,2];
// let arr2 = [1,2];




// assertArraysEquals(arr1,arr2);

