// Implement a filter function which takes two arguments: an array arr and a function fun. It will return a new array containing only the items of the original array for whom calling fun with the item returns a truthy value:
//
// > filter([1, 2, 3], function(n) { return n % 2 === 1 })
// [1, 3]


function filter(arr, fun){
  var a =[];
  arr.forEach(function(n){
    if( fun(n) === true){
      a.push(n);
    }

});
  return a;
}






console.log(filter([1, 2, 3], function(n) { return n % 2 === 1; }));
