

var product = function(a,b){
  return a * b;
};


a = [8,6,7,5,3,9];
b = [2,3];

console.log(a.reduce(product,1));
console.log(b.reduce(product,1));
