// Implement a strJoin function which takes two arguments:
//
// strs - an array of strings to be joined
// sep - a string separator to use to separate each string in the strs array
// It should return the result of joining together each string in the strs array while putting the sep string in between each adjacent string.
//
// > strJoin(['Hello', 'and', 'goodbye'], ' ')
// `Hello and goodbye`
// You may not use the array built-in join method. You may use the reduce method.
//

function strJoin(strs,sep){
  return strs.reduce(function(currentValue,name){
    return currentValue + sep + name;
  });
}


s = ['hello,','I','am','a','javascript', 'program'];

console.log(strJoin(s, " "));
