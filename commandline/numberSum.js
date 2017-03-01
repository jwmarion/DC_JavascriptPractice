function sumNumbers(array){
  var r = 0;
  for (var x = 0; x < array.length; x++){
    r = r + array[x];
  }

  return(r);

}
var a = [1,2,3,4,5,6,7,8,9];

console.log(sumNumbers(a));
