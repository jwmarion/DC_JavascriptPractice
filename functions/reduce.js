// Bonus: reduce
//
// Implement the reduce function. reduce takes three arguments:
//
// arr - the array to reduce
// combine - a function to combine the current value with the next item
// initialValue - the initial value
// > reduce([1, 2, 3], function(value, n) { return value + n; }, 0)
// 6


function reduce(arr, combine, initialvalue){
  a = initialvalue;

  arr.forEach(function(n){
    a = combine(a,n);
  });
  return a;




}





console.log(reduce([1, 2, 3], function(value, n) { return value + n; }, 0));
