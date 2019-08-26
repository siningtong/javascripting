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
module.exports=middle;

