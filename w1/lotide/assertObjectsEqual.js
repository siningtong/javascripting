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
const eqObjects = function(object1, object2) {
  let key1=Object.keys(object1);
  let key2=Object.keys(object2);
  if(key1.length!==key2.length){
    return false
  }else{
    for(let key in object1){
      if(Array.isArray(object1[key])){
        return eqArrays(object1[key],object2[key])
      }
      if(object1[key]!==object2[key]){
        return false
      }
    }
  }
return true
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
 if(eqObjects(actual, expected)){
   console.log(`😀😀😀Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
 }
 else{
  console.log(`🤢🤢🤢Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
 }
};
const a={
  a:'1',
  b:'1.5',
  c:[1,2,3]
}
const b={
  a:'1',
  b:'2',
  c:'3'
}
const c={
  a:'1',
  b:'1.5',
  c:[1,2,3]
}
assertObjectsEqual(a,b);
assertObjectsEqual(a,c)
