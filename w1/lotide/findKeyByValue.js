const assertEqual=function(actual,expected){
  if (actual===expected){
      console.log(`😀Assertion Passed: ${actual} === ${expected}`)
  }
  else{
      console.log(`😂Assertion Failed: ${actual} !== ${expected}`)
  }
  }
  
  const findKeyByValue=function(object,value){
    const arrkeys = Object.keys(object) 
    for(let element of arrkeys){
      if(object[element]===value){
       return element 
      }
    }
  }
    
    //for (let i = 0; i < keys.length; i++) {
      //const key = keys[i]
      //if (object[key] === value)
      const bestTVShowsByGenre = { 
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };
      
      assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
      assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);