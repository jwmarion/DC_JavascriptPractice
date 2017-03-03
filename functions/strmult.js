// Str Multiply
//
// Write a strMultiply function which takes two arguments:
//
// str - the string to multiply
// times - number of times to multiply
// Example:
//
// > strMultiply('abc', 5)
// 'abcabcabcabcabc'
// You may not use the native repeat


function range(min, max) {
  var arr = [];
    for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function strMultiply(input, count){
  var a = range(0,count);
  return a.map(function(a){
    return input;
  });
}

console.log(strMultiply('abc',5).reduce(function(a,b){
  return a+b;
}));
