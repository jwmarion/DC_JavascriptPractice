

var combine = function(a,b){
  return a + b;
};




var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

list = [];
products.forEach(function(thing){
  list.push(thing.price);
});




var total = list.reduce(function(a,b){
  return a+ b;
});

console.log(total);
