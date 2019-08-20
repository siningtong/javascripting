const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😂Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(num) {
  return num.slice(0);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);