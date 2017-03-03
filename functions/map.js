

function map(arr,fun){
  var r =[];
  arr.forEach(function(i){
    r.push(fun(i));
  });
  return r;
  //arr.forEach(fun[arr]);
}


input = [1,2,3,4,5];

console.log(map(input,function(n ){return n + 1;} ));
